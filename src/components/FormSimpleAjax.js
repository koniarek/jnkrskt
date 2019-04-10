import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Współpraca',
    subject: '', // optional subject of the notification email
    action: '',
    successMessage: 'Dzięki za wiadomość, odpowiem wkrótce',
    errorMessage:
      'Wystąpił problem, twoja wiadomość nie została wysłana, proszę o kontakt mailowy - tedoendoce@gmail.com'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Błąd Sieci')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        <Helmet>
          <script src="https://www.google.com/recaptcha/api.js" />
        </Helmet>
        <form
          className="Współpraca"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify=""
          netlify-recaptcha=""
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
          <div className="Form--Group">
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Imię"
                name="firstname"
                required
              />
              <span>Imię</span>
            </label>
            <label className="Form--Label">
              <input
                className="Form--Input Form--InputText"
                type="text"
                placeholder="Nazwisko"
                name="lastname"
                required
              />
              <span>Nazwisko</span>
            </label>
          </div>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              type="email"
              placeholder="Email"
              name="emailAddress"
              required
            />
            <span>Email</span>
          </label>
	        <label className="Form--Label">
		        <input
			        className="Form--Input Form--InputText"
			        type="text"
			        placeholder="Temat"
			        name="Temat"
			        required
		        />
		        <span>Temat</span>
	        </label>
          <label className="Form--Label">
            <textarea
              className="Form--Input Form--Textarea Form--InputText"
              placeholder="Wiadomość"
              name="message"
              rows="10"
              required
            />
            <span>Wiadomość</span>
          </label>
          <label className="Form--Label Form-Checkbox">
            <input
              className="Form--Input Form--Textarea Form--CheckboxInput"
              name="Newsletter"
              type="checkbox"
            />
            <span>Newsletter - Koncerty, Muzyka JNK+WR - bądź na bieżąco</span>
          </label>
          <div
            className="g-recaptcha"
            data-sitekey="6LdoepoUAAAAAGXthTzKh6MpOOAjWAjY3R4sZFXo"
          />
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Wyślij"
            disabled={this.state.disabled}
          />
        </form>
      </Fragment>
    )
  }
}

export default Form
