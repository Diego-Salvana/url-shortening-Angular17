import { Statistic } from '../interfaces/statistic.interface';

export const statistics: Statistic[] = [
   {
      iconPath: '../../../assets/images/icon-brand-recognition.svg',
      title: 'Brand Recognition',
      description:
         'Boost your brand recognition with each click. Generic links don’t  mean a thing. Branded links help instil confidence in your content.',
   },
   {
      iconPath: '../../../assets/images/icon-detailed-records.svg',
      title: 'Detailed Records',
      description:
         'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
   },
   {
      iconPath: '../../../assets/images/icon-fully-customizable.svg',
      title: 'Fully Customizable',
      description:
         'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
   },
];

export const httpRegExp = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/;
