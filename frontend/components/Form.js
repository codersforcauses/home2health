import React from 'react'

export default props => {
  const { errors, submit, submitButtonText, elements, loading } = props

  function handleSubmit(event) {
    event.preventDefault()
    submit()
  }

  function handleCancel(event) {
    event.preventDefault()
    cancel()
  }

  return (
    <div>
      <ErrorsDisplay errors={errors} />
      <form onSubmit={handleSubmit}>
        {elements()}
        <div className="pad-bottom">
          <button className="btn waves-effect waves-light" type="submit" disabled={loading}>
            {submitButtonText}
          </button>
        </div>
      </form>
    </div>
  )
}

function ErrorsDisplay({ errors }) {
  let errorsDisplay = null

  if (errors.length) {
    errorsDisplay = (
      <div>
        <h2 className="validation--errors--label">Validation errors</h2>
        <div className="validation-errors ">
          <ul>
            {errors.map((error, i) => (
              <li key={i}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return errorsDisplay
}
