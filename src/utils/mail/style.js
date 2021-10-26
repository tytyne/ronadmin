const style = `
{
  font-family: 'Montserrat';
  box-sizing: border-box;
}

.narrow-text {
  width: 100%;
  max-width: 1000px;
  margin: 7vh auto 1vh;
  text-align: left;
  font-size: 15px;
}

.image-holder1 {
  width: 60%;
  max-width: 100px;
  margin: 1vh auto;

}

p {
  line-height: 1.3;
}

button {
  border: none;
  border-radius: 6px;
  color: #ffffff;
  background-color: rgb(0, 143, 83);
  font-size: 1em;
  transition: 0.3s ease;
  padding-top: 9px;
  padding-right: 10px;
  padding-bottom: 9px;
  padding-left: 10px;
  margin-right: 50px;

}

a {
  color: rgb(0, 143, 83);
  text-decoration: none;
  font-weight: 600;
}

button:hover {
  background-color: rgb(0, 88, 52);
}

button:active {
  transform: translateY(3px);
}

button:focus {
  outline: none;
}

.image-holder {
  width: 80%;
  max-width: 500px;
  margin: 3vh auto;
}

.footer {
  color: #ffffff;
  background-color: #444444;
}

.image-holder2 {
  width: 40%;
  max-width: 100px;
  margin: 3vh auto;
}

.footer {
  padding: 3vh 15px;
  text-align: center;
}

@media only screen and (max-width: 600px) {
  .inner-body {
      width: 100% !important;
  }

  .footer {
      width: 100% !important;
  }
}

@media only screen and (max-width: 500px) {
  button {
      width: 100% !important;
  }
}


}
`
export default style