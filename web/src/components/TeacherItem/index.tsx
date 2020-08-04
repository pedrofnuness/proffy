import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://scontent.fpoa34-1.fna.fbcdn.net/v/t1.0-9/115718663_3065944763441928_3960947826746763450_o.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_eui2=AeESceBh3H8wNfbYfCCmYlgNNf0qo7esTd01_Sqjt6xN3cnfz6JzDNSZ4k0cReOTec-TRvWi_4z-327NyBpaNR1W&_nc_ohc=q0vGU0M4US4AX-sRZoq&_nc_ht=scontent.fpoa34-1.fna&oh=0389b5ff374f35bfdd09f60a0cac4795&oe=5F4E4FDB"
          alt="Pedro Nunes"
        />
        <div>
          <strong>Pedro Nunes</strong>
          <span>Português</span>
        </div>
      </header>

      <p>
        Apaixonado pela lingua portuguesa desde a época da colonização.
        <br />
        <br />
        Ensino meus alunos a focar nas regras básicas do bom e velho Português
        sempre com o maior intusiasmo e dedicação para que devidamente
        formalizados
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 77,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
