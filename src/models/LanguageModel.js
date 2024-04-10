/*!
  Copyright (c) 2020 - present, DITDOT Ltd. - MIT Licence
  https://github.com/ditdot-dev/vue-flow-form
  https://www.ditdot.hr/en
*/

// Language data store
import i18n from '../i18n';

const translations = i18n.global.getLocaleMessage(i18n.global.locale);

export default class LanguageModel {
  constructor(options) {
    this.enterKey = translations.enterKey
    this.shiftKey = translations.shiftKey
    this.ok = translations.ok
    this.continue = translations.continue
    this.skip = translations.skip
    this.pressEnter = translations.pressEnter
    this.multipleChoiceHelpText = translations.multipleChoiceHelpText
    this.multipleChoiceHelpTextSingle = translations.multipleChoiceHelpTextSingle
    this.otherPrompt = translations.otherPrompt
    this.placeholder = translations.placeholder
    this.submitText = translations.submitText
    this.longTextHelpText = translations.longTextHelpText
    this.prev = translations.prev
    this.next = translations.next
    this.percentCompleted = translations.percentCompleted
    this.invalidPrompt = translations.invalidPrompt
    this.thankYouText = translations.thankYouText
    this.successText = translations.successText
    this.ariaOk = translations.ariaOk
    this.ariaRequired = translations.ariaRequired
    this.ariaPrev = translations.ariaPrev
    this.ariaNext = translations.ariaNext
    this.ariaSubmitText = translations.ariaSubmitText
    this.ariaMultipleChoice = translations.ariaMultipleChoice
    this.ariaTypeAnswer = translations.ariaTypeAnswer
    this.errorAllowedFileTypes = translations.errorAllowedFileTypes
    this.errorMaxFileSize = translations.errorMaxFileSize
    this.errorMinFiles = translations.errorMinFiles
    this.errorMaxFiles = translations.errorMaxFiles

    Object.assign(this, options || {})
  }

  /**
   * Inserts a new CSS class into the language model string to format the :string
   * Use it in a component's v-html directive: v-html="language.formatString(language.languageString)"
   */
  formatString(string, replacements) {
    return string.replace(/:(\w+)/g, (match, word) => {
      if (this[word]) {
        return '<span class="f-string-em">' + this[word] + '</span>'
      } else if (replacements && replacements[word]) {
        return replacements[word]
      }
      
      return match
    })
  }

  formatFileSize(bytes) {
    const
      units = ['B', 'kB', 'MB', 'GB', 'TB'],
      i = bytes > 0 ? Math.floor(Math.log(bytes) / Math.log(1024)) : 0
      
    return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + units[i];
  }
}


