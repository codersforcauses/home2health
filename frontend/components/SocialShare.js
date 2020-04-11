import React from 'react'

const SocialShare = ({
  link = typeof window !== 'undefined'
    ? window.location.href
    : 'https://home2health.org.au/',
  title = 'Home2Health',
  text = typeof document !== 'undefined'
    ? document.querySelector('.container h4 + p')
    : title,
}) => {
  return (
    <div className="container">
      <strong>Share With</strong>
      <a
        className="btn-floating btn-small waves-effect waves-light light-blue darken-4"
        target="_blank"
        href={`https://www.facebook.com/sharer/sharer.php?u=${link}&t=${text}`}
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a
        className="btn-floating btn-small waves-effect waves-light red light-blue lighten-2"
        target="_blank"
        href={`https://twitter.com/intent/tweet?url=${link}&text=${text}`}
      >
        <i className="fab fa-twitter"></i>
      </a>
      <a
        className="btn-floating btn-small waves-effect waves-light red light-blue darken-3"
        target="_blank"
        href={`http://www.linkedin.com/shareArticle?mini=true&url=${link}&title=${title}`}
      >
        <i className="fab fa-linkedin"></i>
      </a>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }
        strong {
          font-weight: 1000;
        }
        a {
          margin: 0 5px;
          display: flex;
          align-content: center;
          justify-content: center;
        }
      `}</style>
    </div>
  )
}

export default SocialShare
