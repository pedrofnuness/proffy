import React, { useState, FormEvent } from 'react';

import api from '../../services/api';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import './styles.css';

function TeacherList() {
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');

  async function searchTeachers(e: FormEvent) {
    e.preventDefault();

    console.log(subject, weekDay, time);

    const response = await api.get('classes', {
      params: {
        week_day: weekDay,
        subject,
        time,
      },
    });

    setTeachers(response.data);
  }

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={searchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { label: 'Artes', value: 'Artes' },
              { label: 'Física', value: 'Física' },
              { label: 'Quimica', value: 'Quimica' },
              { label: 'Direito', value: 'Direito' },
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
            value={weekDay}
            onChange={(e) => {
              setWeekDay(e.target.value);
            }}
            options={[
              { value: '0', label: 'Domingo' },
              { value: '1', label: 'Segunda-feira' },
              { value: '2', label: 'Terça-feira' },
              { value: '3', label: 'Quarta-feira' },
              { value: '4', label: 'Quinta-feira' },
              { value: '5', label: 'Sexta-feira' },
              { value: '6', label: 'Sábado' },
            ]}
          />
          <Input
            type="time"
            name="time"
            label="Hora"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: Teacher) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
