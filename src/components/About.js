import AboutImg from '../assets/about.png'
export default function About(){
    return <section id='About' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2'>
         <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>        
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[170px] font-bold' >About Me</h1>
            <p className='pb-5'>Information about myself</p>
            <p className='pb-5'>
            Hi, My name is Revanth. I am a Full stack web developer. I built beautiful Websites with React.js , Tailwind CSS + Bootstrap
            </p>
            <p className='pb-5'>I am proficient in Frontend skills like React.js, Redux, Redux Tool Kit, Axios, Tailwind CSS, SaSS, Css3 and many more.</p>
            <p className='pb-5'>
            In backend I know Node.js, Express.js, MongoDB, and Mongoose
            </p></div>
        </div>
    </section>
}