import emailjs from '@emailjs/browser';
import { useState } from 'react';
const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
  nom: "",      
  email: "",   
  message: ""   
});
 
const handleChange = (e) => {
  setFormData({ 
    ...formData, 
    [e.target.name]: e.target.value 
  });
  console.log(formData)
};
const sendEmail = (e) => {
  e.preventDefault();
  setStatus("sending"); 

  emailjs.send('service_jrrn1bl', 'template_4t4mz0m', formData, 'ogF3a_vHGCtfkDb2o')
    .then(() => {
      setStatus("success");
      setFormData({ nom: "", email: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    })
    .catch(() => {
      setStatus("error");
    });
};
  return (
    <section id="contact" className='py-24 min-h-screen bg-transparent'>
        <div className='container   mx-auto text-center px-6'>
                <h2 className='text-4xl  text-faith-pink mb-16 font-black'>Contactez-nous pour un dévis</h2>
        </div>
        <div className='container mx-auto  bg-white/5 rounded-3xl max-w-[650px] p-8'>
          {status === "success" && (
              <p className="text-green-400 text-sm font-medium mb-4 animate-pulse text-center">
                            Votre message a été envoyé avec succès !
              </p>
          )}
          {status === "error" && (
              <p className="text-red-400 text-sm font-medium mb-4">
                Une erreur est survenue, veuillez réessayer.
              </p>
                      )}
            <form onSubmit={sendEmail} className='container mx-auto space-y-4 grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2 mb-5'>
                  <label htmlFor="" className='text-sm font-medium px-2'>
                      Nom complet:
                  </label>
                  <input type="text" 
                  name="nom" 
                  value={formData.nom}
                  onChange={handleChange}
                  required
                  placeholder='koffi palmeur'
                  className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-faith-blue outline-none transition-all"
                  />
              </div>
              <div className='flex flex-col gap-2 mb-5'>
                  <label htmlFor="" className='text-sm font-medium px-2'>
                      Email:
                  </label>
                  <input type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange} 
                  required
                  placeholder='votre@email.com'
                  className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-faith-blue outline-none transition-all"
                  />
              </div>
              <div className='flex flex-col gap-2 mb-5 md:col-span-2'>
                  <label htmlFor="" className='text-sm font-medium px-2'>
                      Message:
                  </label>
                  <textarea
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  required
                  placeholder='Entrez votre message'
                  className="bg-white/5 border border-white/10 p-3 rounded-lg focus:border-faith-blue outline-none transition-all"
                  />
              </div>
              <div className='flex flex-col gap-2 mb-5 md:col-span-2'>
                  <button type='submit' className='w-full py-4 font-bold bg-faith-magenta rounded-4xl hover:brightness-110 transition-all'>
                    {status === "sending" ? "Envoi en cours..." : "Envoyer"}
                  </button>
              </div>
            </form>
        </div>
    </section>
  )
}

export default Contact
