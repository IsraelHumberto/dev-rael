import Project from "@/components/Project/Project"
import ProviderProjects from "@/components/Project/ProviderProjects"
import { ProjectContext } from "@/components/Project/context"
import { projectsSection } from "@/utils/projectsSection"
import Image from "next/image"

export default async function Projetos() {


  return (
    <>
      <main className="w-full relative projects-page">
        <div className='lg:container lg:mx-auto section w-full '>
          {/* <div className="grid gap-8 mb-6 lg:mb-16 xl:grid-cols-2 place-content-center">

            {projectsSection.projects.map(({ description, id, images, link, tags, name }, index) => (
              <Project key={index} description={description} id={id} image={images[0]} link={link} tags={tags} name={name} />
            ))}

          </div>
          <div class="max-w-sm w-full lg:max-w-full lg:flex">
            <div class="h-48 lg:h-auto lg:w-48 flex-none relative rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
              <Image src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" width={500} height={500} className="object-cover h-full" alt="akdjkal" />
            </div>
            <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div class="mb-8">
                <p class="text-sm text-gray-600 flex items-center">
                  <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                  </svg>
                  Members only
                </p>
                <div class="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
                <p class="text-gray-700 text-base">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod quibusdam voluptate culpa cumque explicabo laudantium quae atque obcaecati exercitationem autem enim commodi repellendus aliquam iusto consequatur eos reprehenderit dolores placeat, maxime veniam. Rerum ducimus labore nesciunt, nemo iure architecto quo magnam? Perspiciatis officia vel inventore. Debitis qui aliquid illo inventore nobis minus doloribus, quae consectetur deleniti itaque delectus optio libero pariatur similique accusamus consequatur, nostrum fugit nisi laudantium tempora provident!.</p>
              </div>
              <div class="flex items-center">
                <Image class="w-10 h-10 rounded-full mr-4" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="Bonnie Avatar" width={200} height={200} />
                <div class="text-sm">
                  <p class="text-gray-900 leading-none">Jonathan Reinink</p>
                  <p class="text-gray-600">Aug 18</p>
                </div>
              </div>
            </div>
          </div> */}
          <ProviderProjects />
        </div>
      </main>
    </>
  )
}