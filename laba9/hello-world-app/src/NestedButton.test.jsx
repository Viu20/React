import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NestedButton from './components/NestedButton';

describe('NestedButton Component', () => {
  let alertMock;

  beforeAll(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockClear();
  });

  afterAll(() => {
    alertMock.mockRestore();
  });

  describe('when stopPropagation=true', () => {
    it('inner button click triggers only its own handler', () => {
      render(<NestedButton stopPropagation={true} />);
      
      fireEvent.click(screen.getByTestId('inner-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(1);
      console.log('Проверка количества вызовов alert для внутренней кнопки (stopPropagation=true) - УСПЕШНО');
      
      expect(alertMock).toHaveBeenCalledWith('Внутренняя кнопка clicked - 1');
      console.log('Проверка содержания alert для внутренней кнопки - УСПЕШНО');
    });

    it('outer container click triggers only its own handler', () => {
      render(<NestedButton stopPropagation={true} />);
      
      fireEvent.click(screen.getByTestId('outer-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(1);
      console.log('Проверка количества вызовов alert для внешней кнопки (stopPropagation=true) - УСПЕШНО');
      
      expect(alertMock).toHaveBeenCalledWith('Внешняя кнопка clicked');
      console.log('Проверка содержания alert для внешней кнопки - УСПЕШНО');
    });
  });

  describe('when stopPropagation=false', () => {
    it('inner button click triggers both handlers', () => {
      render(<NestedButton stopPropagation={false} />);
      
      fireEvent.click(screen.getByTestId('inner-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(2);
      console.log('Проверка количества вызовов alert для внутренней кнопки (stopPropagation=false) - УСПЕШНО');
      
      expect(alertMock).toHaveBeenCalledWith('Внутренняя кнопка clicked - 1');
      console.log('Проверка первого alert (внутренняя кнопка) - УСПЕШНО');
      
      expect(alertMock).toHaveBeenCalledWith('Внешняя кнопка clicked');
      console.log('Проверка второго alert (внешняя кнопка) - УСПЕШНО');
    });

    it('outer container click triggers only its own handler', () => {
      render(<NestedButton stopPropagation={false} />);
      
      fireEvent.click(screen.getByTestId('outer-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(1);
      console.log('Проверка количества вызовов alert для внешней кнопки (stopPropagation=false) - УСПЕШНО');
      
      expect(alertMock).toHaveBeenCalledWith('Внешняя кнопка clicked');
      console.log('Проверка содержания alert для внешней кнопки - УСПЕШНО');
    });
  });
});

/*import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NestedButton from './components/NestedButton';

describe('NestedButton Component', () => {
  let alertMock;

  beforeAll(() => {
    alertMock = jest.spyOn(window, 'alert').mockImplementation(() => {});
  });

  afterEach(() => {
    alertMock.mockClear();
  });

  afterAll(() => {
    alertMock.mockRestore();
  });

  describe('when stopPropagation=true', () => {
    it('inner button click triggers only its own handler', () => {
      render(<NestedButton stopPropagation={true} />);
      
      fireEvent.click(screen.getByTestId('inner-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledWith('Внутренняя кнопка clicked');
    });

    it('outer button click triggers only its own handler', () => {
      render(<NestedButton stopPropagation={true} />);
      
      fireEvent.click(screen.getByTestId('outer-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledWith('Внешняя кнопка clicked');
    });
  });

  describe('when stopPropagation=false', () => {
    it('inner button click triggers both handlers', () => {
      render(<NestedButton stopPropagation={false} />);
      
      fireEvent.click(screen.getByTestId('inner-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(2);
      expect(alertMock).toHaveBeenCalledWith('Внутренняя кнопка clicked');
      expect(alertMock).toHaveBeenCalledWith('Внешняя кнопка clicked');
    });

    it('outer button click triggers only its own handler', () => {
      render(<NestedButton stopPropagation={false} />);
      
      fireEvent.click(screen.getByTestId('outer-button'));
      
      expect(alertMock).toHaveBeenCalledTimes(1);
      expect(alertMock).toHaveBeenCalledWith('Внешняя кнопка clicked');
    });
  });
});*/

