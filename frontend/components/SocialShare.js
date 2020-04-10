import React from 'react'

const fbOnclick = (link = 'https://home2health.org.au/') => {
  FB.ui(
    {
      display: 'popup',
      method: 'share',
      href: link,
      quote: 'quote here',
    },
    function (response) {}
  )
}

const SocialShare = ({ linkFB, linkTwitter, linkLinkedIn }) => {
  return (
    <div className="container">
      <strong>Share With</strong>
      <a
        className="btn-floating btn-small waves-effect waves-light light-blue darken-4"
        onClick={() => fbOnclick(linkFB)}
      >
        <i className="fab fa-facebook"></i>
      </a>
      <a className="btn-floating btn-small waves-effect waves-light red light-blue lighten-2">
        <i className="fab fa-twitter"></i>
      </a>
      <a className="btn-floating btn-small waves-effect waves-light red light-blue darken-3">
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
