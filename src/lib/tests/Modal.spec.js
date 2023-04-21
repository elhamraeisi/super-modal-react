/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Modal from './../components/Modal';

describe('Modal component', () => {
  const setIsOpenMock = jest.fn();
  const contentMock = jest.fn();
  const titleMock = 'Test Title';

  beforeEach(() => {
    setIsOpenMock.mockClear();
    contentMock.mockClear();
  });

  it('renders without crashing', () => {
    render(<Modal isOpen={true} setIsOpen={setIsOpenMock} content={contentMock} title={titleMock} />);
  });

  it('displays the title passed as a prop', () => {
    render(<Modal isOpen={true} setIsOpen={setIsOpenMock} content={contentMock} title={titleMock} />);
    expect(screen.getByText(titleMock)).toBeDefined();
  });

  it('calls the setIsOpen function when the close button is clicked', () => {
    const { getByText } = render(<Modal isOpen={true} setIsOpen={setIsOpenMock} content={contentMock} title={titleMock} />);
    fireEvent.click(getByText('X'));
    expect(setIsOpenMock).toHaveBeenCalledWith(false);
  });

  it('displays the content returned by the content prop function', () => {
    const contentTextMock = 'Test content';
    contentMock.mockReturnValueOnce(<p>{contentTextMock}</p>);
    render(<Modal isOpen={true} setIsOpen={setIsOpenMock} content={contentMock} title={titleMock} />);
    expect(screen.getByText(contentTextMock)).toBeDefined();
  });
});