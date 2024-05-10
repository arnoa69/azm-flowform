// Create and setup your form here

<template>
  <div>
    <flow-form
      ref="flowform"
      v-on:complete="onComplete"
      v-on:submit="onSubmit"
      v-bind:questions="questions"
      v-bind:language="language"
      v-bind:standalone="true"
    >
      <!-- Custom content for the Complete/Submit screen slots in the FlowForm component -->
      <!-- We've overriden the default "complete" slot content -->
      <template v-slot:complete>
        <div class="f-section-wrap">
          <p>
            <span class="fh2">{{ language.endThankyou }}</span>
            <span class="f-section-text">
              {{ language.we_are_done }}
            </span>
          </p>
          <p class="f-description">
            {{ language.endDescription }}
          </p>
        </div>
      </template>

      <!-- We've overriden the default "completeButton" slot content -->
      <template v-slot:completeButton>
        <div class="f-submit" v-if="!submitted">
          <button
            class="o-btn-action"
            ref="button"
            type="submit"
            href="#"
            v-on:click.prevent="onSendData()"
            aria-label="Press to submit"
          >
            <span>{{ language.submitText }}</span>
          </button>
          <a
            class="f-enter-desc"
            href="#"
            v-on:click.prevent="onSendData()"
            v-html="language.formatString(language.pressEnter)"
          >
          </a>
        </div>

        <p class="text-success" v-if="submitted">{{ language.endSendSuccess }}</p>
      </template>
    </flow-form>
  </div>
</template>

<script>
/*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://www.ditdot.hr/en

    If using the npm package, use the following line instead of the ones above.
    import FlowForm, { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'    
*/

// Import necessary components and classes
import FlowForm from "../../src/components/FlowForm.vue";
import { API_URL } from "@/config/config.js";
import QuestionModel, {
  QuestionType,
  ChoiceOption,
  LinkOption,
} from "../../src/models/QuestionModel";
import LanguageModel from "../../src/models/LanguageModel";
import i18n from "../../src/i18n";
import axios from "axios";
import ProductModel from "@/models/ProductModel";

const translations = i18n.global.messages[i18n.global.locale];

const productData = new ProductModel();

export default {
  name: "example",

  components: {
    FlowForm,
  },

  data() {
    return {
      products: productData.products,
      submitted: false,
      completed: false,
      language: new LanguageModel(),
      translation: "",
      questions: [
        /* BEGIN - Ramp type */
        new QuestionModel({
          id: 'path_station_choice',
          /*tagline: translations.qLoadingRampTypeTagline, */
          title: translations.qLoadingRampTypeTitle,
          helpTextShow: true,
          type: QuestionType.MultiplePictureChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              imageSrc: productData.products[23].product_image,
              imageAlt: translations.qRampTypeFix,
              label: translations.qRampTypeFix,
              value: 'path_weight_6_to_10'
            }),            
            new ChoiceOption({
              imageSrc: productData.products[35].product_image,
              imageAlt: translations.qRampTypeMobile,
              label: translations.qRampTypeMobile,
              value: 'path_weight_6_to_10'
            })
          ],
          jump: {
            path_weight_6_to_10: 'path_weight_6_to_10'
          }
        }),
        /* END - Ramp type */            
        new QuestionModel({
          id: 'path_weight_6_to_10',
          tagline: translations.qRampWeight6to10Tagline,
          title: translations.qRampWeight6to10Title,
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: false,
          required: true,
          options: [
            new ChoiceOption({
              label: '6-Tonne Loading Ramp',
              value: '6-Tonne Loading Ramp'
            }),
            new ChoiceOption({
              label: '8-Tonne Loading Ramp',
              value: '8-Tonne Loading Ramp'
            }),
            new ChoiceOption({
              label: '10-Tonne Loading Ramp',
              value: '10-Tonne Loading Ramp'
            })
          ]
        }),     
        new QuestionModel({
          id: "quantity_needed",
          tagline: translations.quantity_needed_tagline,
          title: translations.quantity_needed_title,
          type: QuestionType.Number,
          required: true,
          placeholder: translations.placeholder_quantity,
        }),              
        new QuestionModel({
          id: "delivery_date",
          tagline: translations.delivery_date_tagline,
          title: translations.delivery_date_title,
          type: QuestionType.Date,
          required: true,
          placeholder: translations.placeholder,
        }),              
        new QuestionModel({
          id: "additional_comments",
          tagline: translations.additional_comments_tagline,
          title: translations.additional_comments_title,
          type: QuestionType.LongText,
          required: true,
          placeholder: translations.placeholder,
        }),   
        /* END - Ramp weight potential */

        /* BEGIN - Collect Contact data */
        new QuestionModel({
          id: "path_info_contact_data",
          tagline: translations.path_info_contact_data_tagline,
          title: translations.path_info_contact_data_title,
          type: QuestionType.SectionBreak,
          helpTextShow: false,
          required: true,
          jump: {
            company_name: "company_name",
          },
        }),        
        new QuestionModel({
          id: "company_name",
          tagline: translations.qCompanyNameTagline,
          title: translations.qCompanyNameTitle,
          type: QuestionType.Text,
          required: true,
          placeholder: translations.placeholder,
        }),
        new QuestionModel({
          id: "contact_email",
          tagline: translations.qContactEmailTagline,
          title: translations.qContactEmailTitle,
          type: QuestionType.Email,
          required: true,
          placeholder: translations.placeholder,
        }),

        new QuestionModel({
          id: "contact_phone",
          tagline: translations.qCompanyNameTagline,
          title: translations.qContactPhoneTitle,
          type: QuestionType.Phone,
          required: true,
          mask: "### ### ###",
        }),

        new QuestionModel({
          id: "contact_name",
          title: translations.qContactNameTitle,
          type: QuestionType.Text,
          required: true,
          placeholder: translations.placeholder,
        }),
        /* END - Collect Contact data */

        /* BEGIN - Last chance for changes then submit */
        new QuestionModel({
          id: "path_submit",
          title: translations.almost_there,
          content: translations.next_path,
          type: QuestionType.SectionBreak,
          jump: {
            _other: "_submit",
          },
        }),
        /* END - Last chance for changes then submit */
      ],
    };
  },

  mounted() {
    this.translation = translations;
    document.addEventListener("keyup", this.onKeyListener);
  },

  beforeUnmount() {
    document.removeEventListener("keyup", this.onKeyListener);
  },

  methods: {
    onKeyListener($event) {
      // We've overriden the default "complete" slot so
      // we need to implement the "keyup" listener manually.

      if ($event.key === "Enter" && this.completed && !this.submitted) {
        this.onSendData();
      }
    },

    /* eslint-disable-next-line no-unused-vars */
    onComplete(completed, questionList) {
      // This method is called whenever the "completed" status is changed.
      this.completed = completed;
    },

    /* eslint-disable-next-line no-unused-vars */
    onSubmit(questionList) {
      // This method will only be called if you don't override the
      // completeButton slot.
      this.onSendData();
    },

    async onSendData() {
      // Set `submitted` to true so the form knows not to allow back/forward
      // navigation anymore.
      this.$refs.flowform.submitted = true;

      this.submitted = true;

      /* eslint-disable-next-line no-unused-vars */
      const data_raw = this.getData();

      const url = API_URL;

      try {
        const contactIPData = await this.getContactIP();

        const formData = new FormData();
        
        data_raw.answers.country = contactIPData.country_name;
        data_raw.answers.ip_address = contactIPData.ip;
        data_raw.answers.referer_funnel_domain = window.location.hostname;

        let referrer = document.referrer;
        if (referrer === null) {
          data_raw.answers.referer = "direct-access";
        } else {
          data_raw.answers.referer = referrer;
        }

        let tailored_message = {
          "flowform": "stations",
          "choice_station": data_raw.answers.path_station_choice,
          "weight_capacity": data_raw.answers.path_weight_6_to_10,
          "quantity": data_raw.answers.quantity_needed,
          "delivery_date": data_raw.answers.delivery_date,
          "comments": data_raw.answers.additional_comments,
          "client_ip": data_raw.answers.ip_address,
        };
        let tailored_message_string = JSON.stringify(tailored_message);

        formData.append("company_name", data_raw.answers.company_name);
        formData.append("email", data_raw.answers.contact_email);
        formData.append("name", data_raw.answers.contact_name);
        formData.append("phone_number", data_raw.answers.contact_phone);
        formData.append("locale", data_raw.answers.country);
        formData.append("message", tailored_message_string);
        formData.append("source", 'layout1.flowform');

        const response = await axios.post(url, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          }
        });

        if (response.data.ok) {
          // Data successfully saved
          console.log("Data successfully saved to the backend");
        } else {
          // Handle error response from the backend
          console.error("Failed to save data to the backend");
        }
      } catch (error) {
        // Handle any errors that occurred during the fetch or await operations
        console.error("An error occurred:", error);
      }
    },

    getData() {
      const data = {
        questions: [],
        answers: [],
      };

      this.questions.forEach((question) => {
        if (question.title && question.answer !== null) {
          let answer = question.answer;
          if (Array.isArray(answer)) {
            answer = answer.join(", ");
          }

          data.questions.push(question.title);
          data.answers[question.id] = answer;
        }
      });

      return data;
    },

    getContactIP() {
      return (async () => {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        return data;
      })();
    },
  },
};
</script>

<style lang="css">
@import "../../src/assets/css/themes/theme-minimal.css";
/* If using the npm package, use the following lines instead of the one above */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.css'; */
/* @import '~@ditdot-dev/vue-flow-form/dist/vue-flow-form.theme-minimal.css'; */
</style>
