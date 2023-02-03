import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Head, Logo, Input } from './headerStyled';
import logo from '../../icons/eletrico 1.png';
import { Context } from '../../contexts';

function Header() {
  const navigate = useNavigate();
  const [input, setInput] = useState('');

  const { setSearch } = useContext(Context);

  const heardleKeyUp = (code: string) => {
    if (code === 'Enter') {
      if (input === '') {
        setSearch('');
        return;
      }
      setSearch(input);
    }
  };

  return (
    <Head>
      <Logo type="image" src={logo} onClick={() => navigate('/')} />
      <Input
        placeholder={`    Buscar por modelo`}
        value={input}
        onChange={({ target }) => setInput(target.value)}
        onKeyUp={({ code }) => {
          heardleKeyUp(code);
        }}
      />
    </Head>
  );
}

export default Header;
