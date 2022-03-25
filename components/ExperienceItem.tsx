import Image from 'next/image';
import React from 'react';
import { IExperience } from '../consts/experiences';

export const ExperienceItem = ({
  img,
  dateStart,
  dateEnd,
  jobTitle,
  jobDesc,
}: IExperience) => {
  return (
    <div>
      <Image
        src={img ? img : ''}
        alt='brand image'
        width={200}
        height={200}
        layout='fixed'
      />
      <p>
        {dateStart} - {dateEnd}
      </p>
      <p>{jobTitle}</p>
      <p>{jobDesc}</p>
    </div>
  );
};
