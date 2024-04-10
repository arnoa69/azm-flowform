// Create and setup your form here

<template>
  <div> rampes
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
              We are done with the survey.
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
      // Create question list with QuestionModel instances
      questions: [
        // new QuestionModel({
        //   id: 'multiple_choice',
        //   tagline: 'Pour info, vous pouvez toujours revenir en arrière 👈, utilisez la flèche vers le haut en bas.',
        //   title: 'Dans lequel des secteurs suivants votre entreprise est-elle active ?',
        //   helpTextShow: false,
        //   type: QuestionType.MultipleChoice,
        //   multiple: false,
        //   allowOther: true,
        //   required: true,
        //   options: [
        //     new ChoiceOption({
        //       label: 'Fabrication'
        //     }),
        //     new ChoiceOption({
        //       label: 'Logistique'
        //      }),
        //     new ChoiceOption({
        //       label: 'Commerce de détail'
        //     }),
        //     new ChoiceOption({
        //       label: 'Gastronomie'
        //     }),
        //     new ChoiceOption({
        //       label: 'Construction'
        //     }),
        //     new ChoiceOption({
        //       label: 'Automobiles'
        //     })
        //   ]
        // }),

        /* BEGIN - Ramp type */
        new QuestionModel({
          id: 'path_fix_or_mobile_or_station',
          /*tagline: translations.qLoadingRampTypeTagline, */
          title: translations.qLoadingRampTypeTitle,
          helpTextShow: true,
          type: QuestionType.MultiplePictureChoice,
          multiple: false,
          required: true,
          options: [
            new ChoiceOption({
              imageSrc: productData.products[0].product_image,
              imageAlt: translations.qRampTypeFix,
              label: translations.qRampTypeFix,
              value: 'path_fix'
            }),            
            new ChoiceOption({
              imageSrc: productData.products[6].product_image,
              imageAlt: translations.qRampTypeMobile,
              label: translations.qRampTypeMobile,
              value: 'path_mobile'
            }), 
            new ChoiceOption({
              imageSrc: productData.products[23].product_image,
              imageAlt: translations.qRampTypeStationWithRamp,
              label: translations.qRampTypeStationWithRamp,
              value: 'path_station'
            }),
          ],
          jump: {
            path_fix: 'path_fix',
            path_mobile: 'path_mobile',
            path_station: 'path_station',
          }
        }),

         new QuestionModel({
          id: 'path_fix',
          tagline: translations.qRampFixTagline,
          title: translations.qRampFixTitle,
          helpTextShow: false,
          type: QuestionType.MultiplePictureChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              imageSrc: productData.products[0].product_image,
              imageAlt: translations.qRampFixLeveler,
              label: translations.qRampFixLeveler,
              value: 'path_to_1_leveler_info'
            }),
            new ChoiceOption({
              imageSrc: productData.products[1].product_image,
              imageAlt: translations.qRampFixAdjacent,
              label: translations.qRampFixAdjacent,
              value: 'path_weight_8_to_10'
             }),         
            new ChoiceOption({
              imageSrc: productData.products[9].product_image,
              imageAlt: translations.qRampFixSimple,
              label: translations.qRampFixSimple,
              value: 'path_weight_8_to_12'
            })
          ],
          jump: {
            path_to_1_leveler_info: 'path_to_1_leveler_info',
            path_weight_8_to_10: 'path_weight_8_to_10',
            path_weight_8_to_12: 'path_weight_8_to_12',
          }
        }),

        new QuestionModel({
          id: 'path_to_1_leveler_info',
          title: translations.path_to_1_leveler_info_title,
          content: translations.path_to_1_leveler_info_content,
          helpTextShow: false,
          type: QuestionType.SectionBreak,
          required: false,
          jump: {
              path_info_contact_data: 'path_info_contact_data',
          }
        }),

        new QuestionModel({
          id: 'path_mobile',
         /* tagline: translations.qRampMobileTagline, */
          title: translations.qRampMobileTitle,
          helpTextShow: false,
          type: QuestionType.MultiplePictureChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              imageSrc: productData.products[6].product_image,
              imageAlt: translations.qRampMobileHydraulic,
              label: translations.qRampMobileHydraulic,
              value: 'path_weight_8_to_20'
            }),
            new ChoiceOption({
              imageSrc: productData.products[26].product_image,
              imageAlt: translations.qRampMobileElectric,
              label: translations.qRampMobileElectric,
              value: 'path_electric'
            }),
            new ChoiceOption({
              imageSrc: productData.products[31].product_image,
              imageAlt: translations.qRampMobileGas,
              label: translations.qRampMobileGas,
              value: 'path_weight_8_to_20'
            }),         
            new ChoiceOption({
              imageSrc: productData.products[13].product_image,
              imageAlt: translations.qRampMobileManual,
              label: translations.qRampMobileManual,
              value: 'path_weight_8_to_20'
            }),                                
          ],
          jump: {
            path_weight_8_to_20: 'path_weight_8_to_20',
            path_electric: 'path_electric'
          }
        }),
        new QuestionModel({
          id: 'path_electric',
          tagline: translations.qRampElectricChoiceTagline,
          title: translations.qRampElectricChoiceTitle,
          helpTextShow: false,
          type: QuestionType.MultiplePictureChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              imageSrc: productData.products[26].product_image,
              imageAlt: translations.qRampElectricChoiceZRLLO,
              label: translations.qRampElectricChoiceZRLLO,
              value: 'path_weight_8_to_20'
            }),
            new ChoiceOption({
              imageSrc: productData.products[40].product_image,
              imageAlt: translations.qRampElectricChoiceZRE,
              label: translations.qRampElectricChoiceZRE,
              value: 'path_weight_8_to_15'
            }),
            new ChoiceOption({
              imageSrc: productData.products[44].product_image,
              imageAlt: translations.qRampElectricChoiceXLE,
              label: translations.qRampElectricChoiceXLE,
              value: 'path_weight_10_to_20'
            })                               
          ],
          jump: {
            path_weight_8_to_20: 'path_weight_8_to_20',
            path_weight_8_to_15: 'path_weight_8_to_15',
            path_weight_10_to_20: 'path_weight_10_to_20'
          }
        }),    

        new QuestionModel({
          id: 'path_station',
          tagline: translations.qRampStationTagline,
          title: translations.qRampStationTitle,
          helpTextShow: false,
          type: QuestionType.MultiplePictureChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              imageSrc: productData.products[3].product_image,
              imageAlt: translations.qRampStationWithLeveler,
              label: translations.qRampStationWithLeveler,
              value: 'path_weight_8_to_10'
            }),
            new ChoiceOption({
              imageSrc: productData.products[24].product_image,
              imageAlt: translations.qRampStationLevelerAndRamp,
              label: translations.qRampStationLevelerAndRamp,
              value: 'path_weight_6_to_10'
             }),
             new ChoiceOption({
              imageSrc: require('./assets/images/rampen/planning-loading-ramp.jpg'),
              imageAlt: translations.qRampStationCustom,
              label: translations.qRampStationCustom,
              value: 'path_to_upload_blueprint'
             }),             
          ],
          jump: {
            path_weight_6_to_10: 'path_weight_6_to_10',
            path_weight_8_to_10: 'path_weight_8_to_10',
            path_to_upload_blueprint: 'path_to_upload_blueprint'
          }
        }),

        new QuestionModel({
          id: 'path_to_upload_blueprint',
          tagline: translations.qFileUploadTagline,
          title: translations.qFileUploadTitle,
          helpTextShow: true,
          type: QuestionType.File,
          jump: {
            path_info_contact_data: 'path_info_contact_data',
          }
        }),
        
        new QuestionModel({
          id: 'path_to_skipped',
          tagline: translations.qFileUploadSkippedTagline,
          title: translations.qFileUploadSkippedTitle,
          helpTextShow: true,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: false,
          options: [
            new ChoiceOption({
              label: translations.qFileUploadSkippedLabelRestart,
              value: 'path_fix_or_mobile_or_station'
            }),
            new ChoiceOption({
              label: translations.qFileUploadSkippedLabelContactUs,
              value: 'path_info_contact_data'
            }),
          ],
          jump: {
            path_fix_or_mobile_or_station: 'path_fix_or_mobile_or_station',
            path_info_contact_data: 'path_info_contact_data',
          }
        }),  
        /* END - Ramp type */      

        /* BEGIN - Ramp weight potential */
        new QuestionModel({
          id: 'path_weight_8_to_20',
          tagline: translations.qRampWeight8to20Tagline,
          title: translations.qRampWeight8to20Title,
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              label: '8-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '10-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '12-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '15-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '20-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
          ],
          jump: {
            path_info_contact_data: 'path_info_contact_data',
          }
        }),

        new QuestionModel({
          id: 'path_weight_8_to_12',
          tagline: translations.qRampWeight8to12Tagline,
          title: translations.qRampWeight8to12Title,
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              label: '8-Tonne Loading Ramp',
              value: 'path_info_contact_data',
            }),
            new ChoiceOption({
              label: '10-Tonne Loading Ramp',
              value: 'path_info_contact_data',
            }),
            new ChoiceOption({
              label: '12-Tonne Loading Ramp',
              value: 'path_info_contact_data',
            })
          ],
          jump: {
            path_info_contact_data: 'path_info_contact_data',
          }
        }),       
        
        new QuestionModel({
          id: 'path_weight_6_to_10',
          tagline: translations.qRampWeight6to10Tagline,
          title: translations.qRampWeight6to10Title,
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              label: '6-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '8-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '10-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            })
          ],
          jump: {
            path_info_contact_data: 'path_info_contact_data',
          }
        }),        
        
        new QuestionModel({
          id: 'path_weight_10_to_20',
          tagline: translations.qRampWeight10to20Tagline,
          title: translations.qRampWeight10to20Title,
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              label: '10-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '15-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '20-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            })
          ],
          jump: {
            path_info_contact_data: 'path_info_contact_data',
          }
        }),                


        new QuestionModel({
          id: 'path_weight_8_to_10',
          tagline: translations.qRampWeight8to10Tagline,
          title: translations.qRampWeight8to10Title,
          helpTextShow: false,
          type: QuestionType.MultipleChoice,
          multiple: false,
          allowOther: true,
          required: true,
          options: [
            new ChoiceOption({
              label: '8-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            }),
            new ChoiceOption({
              label: '10-Tonne Loading Ramp',
              value: 'path_info_contact_data'
            })
          ],
          jump: {
            path_info_contact_data: 'path_info_contact_data',
          }
        }),    
        /* END - Ramp weight potential */

        /* BEGIN - Collect Contact data */
        new QuestionModel({
          id: "path_info_contact_data",
          tagline: translations.path_info_contact_data_title,
          content: translations.path_info_contact_data_content,
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
          mask: "(####) ###-####",
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
          title: "Almost There! Share Your Feedback and We'll Be Done! 🥳",
          content: "You can check your data again using the up arrow or send your data using the submit button",
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

        data_raw.answers.choosen_product = "Eine geile rote 20T Rampe";

        formData.append("choosen_product", data_raw.answers.choosen_product);
        formData.append("company_name", data_raw.answers.company_name);
        formData.append("contact_email", data_raw.answers.contact_email);
        formData.append("contact_name", data_raw.answers.contact_name);
        formData.append("contact_phone", data_raw.answers.contact_phone);
        formData.append("country", data_raw.answers.country);
        formData.append("ip_address", data_raw.answers.ip_address);
        formData.append("referer", data_raw.answers.referer);
        formData.append("referer_funnel_domain", data_raw.answers.referer_funnel_domain);

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
