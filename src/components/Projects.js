
import websiteImg1 from '../assets/ecommerce-websites.jpg'

const config={
    project:"https://pickup.onrender.com/"
}
export default function Projects() {
    return <section id='projects' className="flex flex-col py-20 px-5 justify-center bg-primary text-white"> 
        <div className="w-1/2">
        <div className="flex justify-center">
<h1 className="text-4xl border-b-4 border-secondary mb-5 w-[140px] font-bold">Projects</h1>
</div>
</div>
        
        <div className='w-full'>
        <div className='flex flex-col md:flex-row px-10 gap-5'>
        <div className='relative'> 
       
            <img className='h-[200px]' src={websiteImg1}/>
            <div className='project-desc'>
           <p className='text-center py-5'> A ecommerce website using for developming the react</p>
           <p className='pb-5'>You can view my project <a className='btn'href= {config.project}>View</a></p>
          
            </div>
            </div>
            
            
            </div>
           
        </div>

        
    </section>
}