import React, { ChangeEvent, useState } from 'react';
import Form from './components/Form';
import Input from './components/Input';
import Button from './components/Button';
import { User } from './types';
import './App.css';
import { convertNumberToSerial, convertSerialToNumber } from './utils/converts/numberConvert';

function App() {
  const [formData, setFormData] = useState<User>({
    email: '',
    number: ''
  });

  const onChangeForm = (e: ChangeEvent<HTMLInputElement>) => {
    let { value, name } = e.target;

    if (name === "number" && !convertSerialToNumber(value)) {
      return;
    }

    if (name === "number") {
      value = convertNumberToSerial(value);
    }

    setFormData({
      ...formData,
      [name]: value,
    });

  }

  return (
    <div>
      <Form>
        <Input
          type="text"
          label="email"
          value={formData?.email}
          name='email'
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeForm(e)} />
        <Input
          type="text"
          label="number"
          value={formData?.number?.toString()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChangeForm(e)}
          name='number' />
        <Button>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
