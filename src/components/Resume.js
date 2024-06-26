import ResumeImg from '../assets/resume.jpg'
export default function Resume(){
    const config={
        Resume:'
https://drive.google.com/file/d/1GGWjtaSNTnQgkeJrY5Ep3TBhg4CfhywN/view?usp=drivesdk'    }
    return <section id='resume' className='flex flex-col md:flex-row bg-secondary px-5'>
        <div className='py-5 md:w-1/2 flex justify-center'>
         <img className='w-[350px]'src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center text-white'>        
            <h1 className='text-4xl border-b-4 border-primary mb-5 w-[140px] font-bold' >Resume</h1>
            <p className='pb-5'>You can view my resume <a className='btn'href= {config.Resume}>Download</a></p>
            
            </div>
        </div>
    </section>
}
