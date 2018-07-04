import React, { Component } from 'react';
import './AboutUs.css';

// import NavBar from '../../NavBar/NavBar';
import RSNav from '../../NavBar/RSNav/RSNav';
import Footer from '../Footer/Footer';

class AboutUs extends Component {
  render() {
    return (
      <div>
        {/* <NavBar /> */}
        <RSNav />
        <div className="mainThin">
          <h1 className="centerH">
            <strong>
              Our history of commitment to a range of legal matters
            </strong>
          </h1>

          <p>
            Mr. Charles Mandracchia, Esq. and his associates have provided
            comprehensive legal services to a diverse group of clients for{' '}
            <span> over 25 years. </span> Since establishing the firm in 1991,
            we have grown our practice from a small operation concentrating
            mostly in banking and commercial law into the{' '}
            <span>truly full-service law firm </span> that it is today.
          </p>
          <p>
            As Mandracchia Law LLC expanded, we gained the in-depth experience
            and leadership necessary to{' '}
            <span>successfully represent all types of clients,</span> whether
            individuals, families, small business ventures or some of the
            country’s largest commercial and banking businesses. And the area we
            serve has also grown — today our clients are located in Reading,
            Wyomissing, Lansdale, Norristown, Montgomery and Berks counties, and
            throughout all of Pennsylvania, New Jersey and New York. <br />{' '}
            Personal injury and criminal defense lawyers in Montgomery County
            with a <span>lasting commitment to integrity </span>.
          </p>
          <p>
            Even as Mandracchia Law LLC has evolved over the years, we have
            consistently held to the <span>strong ethical guidelines</span> Mr.
            Mandracchia established in the beginning. Our criminal defense and
            personal injury law firm in Montgomery County remains defined by the
            ability to represent clients zealously yet ethically. The emphasis
            is on providing successful results as soon as possible. With more
            than <span>100 years of combined experience,</span> our personal
            injury and criminal defense attorneys use their comprehensive
            knowledge of the legal system along with sound business judgment to
            protect your interests.
          </p>
          <p>
            This ideal{' '}
            <span>permeates the work ethic of the entire staff </span>
            and is a cornerstone of Mandracchia Law LLC’s philosophy. Because
            our Montgomery county criminal defense attorneys and personal injury
            lawyers are experienced in a broad range of practice areas, clients
            often begin their relationship with our firm in one practice area
            and return for help in another area.
            <br /> <span>Aggressive and effective</span> Montgomery County
            personal injury lawyers and criminal defense attorneys who advocate
            for our clients.
          </p>
          <p>
            Mandracchia Law LLC is a multi-state law firm that provides
            individual attention to each client and case. Our personal injury
            and criminal defense lawyers in Montgomery County{' '}
            <span>proudly</span> offer ethical, aggressive and knowledgeable
            representation.
          </p>
          <p>
            Our unique team approach allows clients to benefit from our
            attorneys’ combined experience of more than 100 years. To speak with
            a criminal defense or personal injury lawyer in Montgomery County
            about your legal matter, <span>call 610-584-0700 today</span>, or
            contact us online.
          </p>
          <p>
            Mandracchia Law LLC is located in Montgomery County, serving clients
            in Montgomery County, Berks County, and the suburban Philadelphia
            area
          </p>

          <Footer />
        </div>
      </div>
    );
  }
}

export default AboutUs;
