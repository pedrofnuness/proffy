import React from 'react';

import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers">
          <Select
            name="subject"
            label="Matéria"
            options={[
              { label: 'Artes', value: 'Artes' },
              { label: 'Física', value: 'Física' },
              { label: 'Quimica', value: 'Quimica' },
              { label: 'Biologia', value: 'Biologia' },
              { label: 'Ciências', value: 'Ciências' },
              { label: 'História', value: 'História' },
              { label: 'Português', value: 'Português' },
              { label: 'Geografia', value: 'Geografia' },
              { label: 'Matemática', value: 'Matemática' },
              { label: 'Educação Física', value: 'Educação Física' },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            options={[
              { label: '0', value: 'Domingo' },
              { label: '1', value: 'Segunda-feira' },
              { label: '2', value: 'Terça-feira' },
              { label: '3', value: 'Quarta-feira' },
              { label: '4', value: 'Quinta-feira' },
              { label: '5', value: 'Sexta-feira' },
              { label: '6', value: 'Sábado' },
            ]}
          />
          <Input type="time" name="time" label="Hora" />
        </form>
      </PageHeader>

      <main>
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
        <TeacherItem />
      </main>
    </div>
  );
}

export default TeacherList;
