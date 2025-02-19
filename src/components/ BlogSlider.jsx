import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BlogSlider = () => {
  const settings = {
    dots: true,
    appendDots: (dots) => (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul style={{ display: 'flex', flexDirection: 'row', color: 'white', }}>{dots}</ul>
        </div>
      ),
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const blogPosts = [
    {
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description:
        'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#',
      image: 'https://picsum.photos/400/300?random=1',
    },
    {
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description:
        'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#',
      image: 'https://picsum.photos/400/300?random=2',
    },
    {
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description:
        'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#',
      image: 'https://picsum.photos/400/300?random=3',
    },
    {
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description:
        'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#',
      image: 'https://picsum.photos/400/300?random=4',
    },
    {
      title: 'What Makes Users Want to Share a Video on Social Media?',
      date: 'Jan 03, 2020',
      comments: '05 Comment',
      description:
        'We recently launched a new website for a Vital client and wanted to share some of the cool features we were able...',
      link: '#',
      image: 'https://picsum.photos/400/300?random=5',
    },
  ];

  return (
    <div className='w-full h-full bg-[#0a0215]' id='projects'>
    <div className=" py-10 px-5 max-w-[90em] mx-auto text-white text-center">
      <h2 className="uppercase text-sm mb-2 text-gray-400">OUR BLOG</h2>
      <h3 className="text-2xl font-bold mb-5">BLOG UPDATE</h3>
        <div className="w-16 h-1 bg-blue-400 mx-auto mb-8"></div>
      <Slider {...settings}>
        {blogPosts.map((post, index) => (
          <div key={index} className="relative  transition-opacity  ">
            <div className="relative rounded-md mx-5 my-5 overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[23em] object-cover"
              />
              <div className="absolute top-0 border-2 border-[#222222] left-0 w-full h-full opacity-75 lg:opacity-100 bg-[#0a0215] duration-300 ease-in-out hover:opacity-75" >
              <div className="text-left flex flex-col justify-between items-stretch p-5">
              <h4 className="text-3xl font-bold  mb-2">{post.title}</h4>
              <div className="text-sm text-gray-400 my-4">
                <span >{post.date}</span>
                <span> / {post.comments}</span>
              </div>
              <p className="text-[15px] text-white lg:text-xl leading-relaxed mb-3">{post.description}</p>
              <a href={post.link} className="font-bold">
                Read more →
              </a>
            </div>    
             </div>
            </div>
           
          </div>
          
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default BlogSlider;
