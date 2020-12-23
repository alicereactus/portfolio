import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css'


function Contacts() {
  return (
    <div className={style.contactsBlock}>
      <div className={`${styleContainer.container} ${style.contactsContainer} `}>
        <h2 className={style.title}>MY CONTACTS</h2>
        <form className={style.contactsForm}>
          <input placeholder='Name' />
          <input placeholder='E-mail' />
          <textarea placeholder='Your message' />
        </form>
        <div className={style.btnSend}>
          <button>Send</button>
        </div>
      </div>
    </div>
  );
}

export default Contacts;