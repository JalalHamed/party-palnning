import { IEvent } from 'types';

export const convertToUnix = (date: string, time: string): number => {
  const [day, month, year] = date.split('-').map(Number);
  const [hours, minutes] = time.split(':').map(Number);
  return Date.UTC(year, month - 1, day, hours, minutes);
};

export const getDefaultTodos = (event: IEvent) => {
  let todos = [];
  if (event.eInvite === 'yes')
    todos.push({ title: 'Create an e-invite', isDone: false });
  if (event.food === 'book-a-caterer')
    todos.push({ title: 'Book a Carter', isDone: false });
  if (event.food === 'order-in')
    todos.push({ title: 'Order Food', isDone: false });
  if (event.alcohol === 'yes-order')
    todos.push({ title: 'Order Alcohol', isDone: false });
  if (event.decoration === 'yes')
    todos.push({ title: 'Hire a decorator', isDone: false });
  if (event.games === 'yes')
    todos.push({ title: 'Rent Board Games', isDone: false });
  return todos;
};
