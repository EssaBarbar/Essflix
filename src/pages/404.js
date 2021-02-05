import React, { useEffect, useState } from 'react';
import './404Style.css';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';
import * as Routes from '../constants/routes';

export default function ErrorPage() {
  const history = useHistory();
  function handleClick() {
    history.push(Routes.HOME);
  }
  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 10000);
    $(document).mousemove((event) => {
      $('.torch').css({
        top: event.pageY,
        left: event.pageX,
      });
    });
    document.body.style.alignItems = 'center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.flexFlow = 'column wrap';
    document.body.style.overflow = 'hidden';
    document.body.style.justifyContent = 'center';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.background =
      "url('https://wallpapercave.com/wp/6SLzBEY.jpg') no-repeat left top";
    return () => {
      window.location.reload(false);
    };
  });
  const white = {
    color: 'white',
  };
  return (
    <>
      <h1 style={white}>404</h1>
      <div>
        <h1 style={white}>
          Yow will be redirected to the home page in 10 seconds{' '}
        </h1>
        <h2 style={white}>Uh, Ohh</h2>
        <h3 style={white}>
          Sorry we cant find what you are looking for cuz its so dark in here
        </h3>
      </div>
      <div className="torch"></div>
    </>
  );
}
