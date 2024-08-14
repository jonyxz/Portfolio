import {PROJECTS} from '../constants'

const Projects = () => {
  return (
    <div className='pb-6'>
        <h2 className='my-20 text-center text-4xl'>Projects</h2>
        <div className="">
            {PROJECTS.map((projects, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                        <img className='mb-6 rounded' src={projects.image} width={180} height={180} alt={projects.title}/>
                    </div>
                    <div className="w-full max-w-xl lg:w-3/4">
                        <h6 className='mb-2 font-semibold  text-purple-100'>
                            {projects.title}
                        </h6>
                        <p className='mb-4 text-neutral-400'>
                            {projects.description}
                        </p>
                        {projects.technologies.map((tech, index) => (
                            <span key={index} className='mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800'>{tech}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects