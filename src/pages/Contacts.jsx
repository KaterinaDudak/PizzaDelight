import banner2 from "../assets/images/banner2.png";
import Banner from "../components/Banner/Banner";
import Form from "../components/Form/Form";

const Contacts = () => {
  

  return (
    <>
      <Banner
        bgUrl={banner2}
        title="Contact Us"
        subtitle="Have a question or feedback? We'd love to hear from you!"
      ></Banner>
      <Form></Form>

      <div className='map'>
        <h2 className="mapHeader">Find Us On The Map</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28842.517180968!2d68.32541284639449!3d25.360769096833614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c70644717a901%3A0x2a63b3e36d7135ee!2zTGF0aWZhYmFkLCDQpdCw0LnQtNCw0YDQsNCx0LDQtCwg0J_QsNC60LjRgdGC0LDQvQ!5e0!3m2!1suk!2sua!4v1781796140330!5m2!1suk!2sua"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contacts;
