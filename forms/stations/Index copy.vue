// Create and setup your form here

<template>
  <div>
 <pre>{{ products }}</pre> 
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
            <span class="fh2">Dankeschööön. 🙏</span>
            <span class="f-section-text">
              Gute Arbeit, die Umfrage is fertig. Sie können Ihre Antworten kontrollieren
              oder einreichen.
            </span>
          </p>
          <p class="f-description">
            Ihre Daten werden verantwortflich und sicher gespeichert. Wir nehmen so rasch
            wie möglich Kontakt auf.
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

        <p class="text-success" v-if="submitted">Erfolgreich gesendet.</p>
      </template>
    </flow-form>
  </div>
</template>

<script>
/*
    Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
    https://www.ditdot.hr/en
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

// If using the npm package, use the following line instead of the ones above.
// import FlowForm, { QuestionModel, QuestionType, ChoiceOption, LanguageModel } from '@ditdot-dev/vue-flow-form'

const translations = i18n.global.messages[i18n.global.locale];

const productData = new ProductModel();

export default {
  name: "example",

  components: {
    FlowForm,
  },

  data() {
    return {
      products: productData.loadProducts(),
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

        new QuestionModel({
          id: "company_name",
          tagline: translations.qCompanyNameTagline,
          title: translations.qCompanyNameTitle,
          type: QuestionType.Text,
          required: true,
          placeholder: translations.qCompanyNamePlaceholder,
        }),
        new QuestionModel({
          id: "contact_email",
          tagline: translations.qContactEmailTagline,
          title: translations.qContactEmailTitle,
          type: QuestionType.Email,
          required: true,
          placeholder: translations.qContactEmailPlaceholder,
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
          title: "Et enfin, vote nom de contact",
          type: QuestionType.Text,
          required: true,
          placeholder: "Start typing here...",
        }),

        // new QuestionModel({
        //   id: 'multiple_choice_image',
        //   tagline: "Tout d'abord, une question essentielle...",
        //   title: 'De quoi avez-vous besoin exactement ?',
        //   helpTextShow: false,
        //   type: QuestionType.MultiplePictureChoice,
        //   multiple: true,
        //   required: true,
        //   options: [
        //     new ChoiceOption({
        //       imageSrc: require('./assets/images/rampen/rampe.jpg'),
        //       imageAlt: 'Rampe image',
        //       label: 'Rampe de Chargement',
        //       value: 'path_rampen'
        //     }),
        //     new ChoiceOption({
        //       imageSrc: require('./assets/images/rampen/plattform.jpg'),
        //       imageAlt: 'Passerelle image',
        //       label: 'Passerelle ou table de Chargement',
        //       value: 'path_passarellen'
        //     }),
        //     new ChoiceOption({
        //       imageSrc: require('./assets/images/rampen/überladebrücke.jpg'),
        //       imageAlt: 'Niveleur image',
        //       label: 'Des Niveleur',
        //       value: 'path_überladebrücken'
        //     }),
        //     new ChoiceOption({
        //       imageSrc: require('./assets/images/rampen/station.jpg'),
        //       imageAlt: 'Station Logistique image',
        //       label: 'Station Logistique',
        //       value: 'path_station'
        //     }),
        //   ],
        //   jump: {
        //     path_rampen: 'path_rampen',
        //     path_passarellen: 'path_passarellen',
        //     path_überladebrücken: 'path_überladebrücken',
        //     path_station: 'path_station',
        //   }
        // }),

        // new QuestionModel({
        //   id: 'path_rampen',
        //   tagline: 'Il existe différents besoins',
        //   title: 'Maintenant, allons voir de quel type de rampe vous avez besoin',
        //   helpTextShow: false,
        //   type: QuestionType.MultipleChoice,
        //   multiple: false,
        //   allowOther: true,
        //   required: true,
        //   options: [
        //     new ChoiceOption({
        //       label: 'Mobile'
        //     }),
        //     new ChoiceOption({
        //       label: 'Statique'
        //      }),
        //     new ChoiceOption({
        //       label: 'ancré dans le sol'
        //     })
        //   ]
        // }),

        // new QuestionModel({
        //   id: 'path_passarellen',
        //   tagline: 'Il existe différents besoins',
        //   title: 'Maintenant, allons voir de quelle passerelle vous avez besoin',
        //   helpTextShow: false,
        //   type: QuestionType.MultipleChoice,
        //   multiple: false,
        //   allowOther: true,
        //   required: true,
        //   options: [
        //     new ChoiceOption({
        //       label: 'Hydraulic'
        //     }),
        //     new ChoiceOption({
        //       label: 'Electrique'
        //      }),
        //     new ChoiceOption({
        //       label: 'Manuelle'
        //     })
        //   ]
        // }),

        // new QuestionModel({
        //   id: 'path_question_intern',
        //   tagline: 'Jerome, ces données vont etre enregistrées dans la base de données. Depuis la vente!',
        //   title: 'après ici c\'est la vente en allemand ou avec l\'intelligence artificielle',
        //   helpTextShow: false,
        //   type: QuestionType.MultipleChoice,
        //   multiple: false,
        //   allowOther: true,
        //   required: true,
        //   options: [
        //     new ChoiceOption({
        //       label: 'Acheter directement online ?'
        //     }),
        //     new ChoiceOption({
        //       label: 'Envoyer pdf du bon produit ?'
        //      }),
        //     new ChoiceOption({
        //       label: 'Rediriger vers la page AZ ?'
        //     })
        //   ]
        // }),

        new QuestionModel({
          id: "path_submit",
          title: "Wir sind abschliessend ! 🥳",
          content:
            "Sie können hier Ihre Daten nochmals kontrollieren oder sonst weiter um die Daten zu senden",
          type: QuestionType.SectionBreak,
          jump: {
            _other: "_submit",
          },
        }),
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
