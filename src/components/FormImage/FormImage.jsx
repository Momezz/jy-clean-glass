"use client"

import styles from './formImage.module.css';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { createImage } from '../../redux/features/uploadsSlice';
import Image from 'next/image';

const FormImage = ({ linkImage }) => {
  const profileDefault = 'https://res.cloudinary.com/dgouwu7h7/image/upload/v1673906994/cld-sample-5.jpg'
  const [file, setFile] = useState([]);
  const { uploads } = useSelector((state) => state.upload);
  const dispatch = useDispatch();

  useEffect(() => { }, [uploads]);
  const handleChangeImage = ({ target }) => {
    const { files } = target;
    const image = files[0];
    setFile(image);
  };

  const handleSubmitimage = async (event) => {
    event.preventDefault();
    if (file) {
      try {
        dispatch(createImage(file));
        console.log('fie', file);
      } catch (error) {
        throw new Error(error);
      }
    }
  };

  return (
    <div className={styles.form_img__container}>
      <form
        id="form_menu"
        className={styles.form__img_form}
        onSubmit={handleSubmitimage}
      >
        <h2 className={styles.form__img_title}>Seleccionar imagen</h2>
        <div className={styles.form__img_file}>
          <div>
            {linkImage !== '' ? (
              <Image
                className={styles.form__img_editable_image}
                src={linkImage}
                alt="imagen"
                width={110}
                height={120}
                priority
              />
            ) : (
              <Image
                className={styles.form__img_editable_image}
                src={profileDefault}
                alt="imagen por defecto"
                width={110}
                height={120}
                priority
              />
            )}
          </div>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChangeImage}
          />
        </div>
        <button
          id="form_menu__img-button"
          className={styles.form__img_btn}
          type="submit"
          disabled={!file || file.length === 0}
        >
          Cargar imagen
        </button>
      </form>
      {uploads ? (
        <figure className={styles.form__img_preview_container}>
          <Image
            className={styles.form__img_preview}
            src={uploads}
            alt="img-preview"
            width={110}
            height={120}
            priority
          />
        </figure>
      ) : null}
    </div>
  );
};

FormImage.propTypes = {
  linkImage: PropTypes.string.isRequired,
};

export default FormImage;
