import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('заголовок сторінки має бути "TODO"', () => {
  render(<App />);
  const header = screen.getByText(/TODO/i);
  expect(header).toBeInTheDocument();
});

test('можна ввести як цифри, так і букви у поле для тексту', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Введіть задачу/i);
  fireEvent.change(input, { target: { value: '123' } });
  expect(input.value).toBe('123');
  fireEvent.change(input, { target: { value: 'Тестове завдання' } });
  expect(input.value).toBe('Тестове завдання');
});

test('натискання на кнопку "Додати" без тексту викликає помилку', () => {
  render(<App />);
  const button = screen.getByText(/Додати/i);
  fireEvent.click(button);
  const alert = screen.getByRole('alert');
  expect(alert).toHaveTextContent('Задача не може бути порожньою!');
});

test('новий елемент додається після введення тексту і натискання на кнопку "Додати"', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Введіть задачу/i);
  const button = screen.getByText(/Додати/i);
  
  fireEvent.change(input, { target: { value: 'Нове завдання' } });
  fireEvent.click(button);
  
  const task = screen.getByText(/Нове завдання/i);
  expect(task).toBeInTheDocument();
});

test('можна видалити завдання з списку', () => {
  render(<App />);
  const input = screen.getByPlaceholderText(/Введіть задачу/i);
  const button = screen.getByText(/Додати/i);
  
  fireEvent.change(input, { target: { value: 'Завдання для видалення' } });
  fireEvent.click(button);
  
  const task = screen.getByText(/Завдання для видалення/i);
  const deleteButton = screen.getByText(/Видалити/i);
  fireEvent.click(deleteButton);
  
  expect(task).not.toBeInTheDocument();
});
