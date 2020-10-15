import React, { useState } from 'react';

import { cpfMask } from './Components/cpfMask'
import { phoneMask } from './Components/phoneMask'
import { cnpjMask } from './Components/cnpjMask'
import { plateMask } from './Components/plateMask'
import { cleanMask } from './Components/cleanMask'
import { cepMask } from './Components/cepMask';
import { creditCardEpiry, creditCardNumber } from './Components/creditCardMask';

import './App.css';

export default function App(){

  const [ cpf, setCpf ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ cnpj, setCnpj ] = useState('')
  const [ plate, setPlate ] = useState('')
  const [ cep, setCep ] = useState('')
  const [ number, setNumber ] = useState('');
  const [ expiry, setExpiry ] = useState('');
  
    return (
      <div className='input-div'>
        <div className='intern-div'>
          <h1>React Masks</h1>
          <h3>CPF:</h3>
          <input type='text' maxLength='14' name='cpf' value={cpf} onChange={e => setCpf(cpfMask(e.target.value))}/>
          <h3>Telefone:</h3>
          <input type='text' maxLength='15' value={phoneNumber} onChange={e => setPhoneNumber(phoneMask(e.target.value))}/>
          <h3>CNPJ</h3>
          <input type='text' maxLength='18' value={cnpj} onChange={e => setCnpj(cnpjMask(e.target.value))}/>
          <h3>PLATE:</h3>
          <input type='text' maxLength='8' value={plate} onChange={e => setPlate(plateMask(e.target.value))}/>
          <h3>CEP:</h3>
          <input type='text' maxLength='9' value={cep} onChange={e => setCep(cepMask(e.target.value))}/>
          <h3>CREDIT CARD NUMBER:</h3>
          <input type='text' maxLength='19' value={number} onChange={e => setNumber(creditCardNumber(e.target.value))}/>
          <h3>CREDIT CARD NUMBER:</h3>
          <input type='text' maxLength='5' value={expiry} onChange={e => setExpiry(creditCardEpiry(e.target.value))}/>
        </div>
      </div>
    );
  }
