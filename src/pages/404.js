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
    }, 15000);
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

  const whiteh1 = {
    color: 'white',
    fontSize: '100px',
    marginLeft: '350px',
  };
  const whiteh2 = {
    fontWeight: '900',
    color: 'red',
    fontSize: '32px',
    marginLeft: '30px',
  };
  const whiteh3 = {
    color: 'white',
    fontSize: '35px',
    marginLeft: '30px',
  };
  return (
    <>
      <h1 style={whiteh1}>404</h1>
      <div>
        <h2 style={whiteh2}>Uh, Ohh</h2>
        <h2 style={whiteh2}>
          Sorry we cant find what you are looking for cuz its so dark in here
        </h2>
        <h3 style={whiteh3}>
          Yow will be redirected to the home page in 15 seconds
        </h3>
      </div>
      <div className="torch"></div>
    </>
  );
}
