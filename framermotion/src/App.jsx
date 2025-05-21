import React from 'react'
import { motion, useScroll } from 'motion/react'
import SaleBanner from './components/SaleBanner'
import { div } from 'motion/react-client'
import SmileyBall from './components/SmileyBAll'
const App = () => {
  const scrollYProgress = useScroll().scrollYProgress
  return (
    // <div>

    //   <SaleBanner />
    //   <div >
    //     {/* <motion.div
    //       className="h-[100px] w-[100px] bg-red-500 rounded-full mt-[40vh]"
    //       whileHover={{
    //         backgroundColor: 'green'  
    //       }}
    //       whileTap={{
    //         scale:0.5
    //       }}

    //     /> */}
    //     <motion.div
    //       className="h-[100px] w-[100px] bg-blue-500 rounded-full mt-[40vh]"
    //       drag
    //       whileDrag={{
    //         scale:1.5
    //       }}
    //       dragConstraints={{
    //         left:0,
    //         right:1000,
    //         top:0,
    //         bottom:330
    //       }}
    //       dragDirectionLock:true
    //     />
    //   </div>


    
      // </div >





/* <motion.div 
      className='box'
      initial={{
        x:0,y:0
      }}
      animate={{
        x:[0,600,600,0,0],
        y:[0,0,600,600,0],
        rotate:[0,0,0,0,360],
        scale:[1,1.2,1,1.2,1]
      }}
      transition={{
        repeat:Infinity,
        duration:2,
        delay:0,
        
      }}
      >

      </motion.div> */      



      // <div className='p-10 text-center font-mono'>
      //   <motion.div 
      //   className='bg-red-400 w-full h-4 fixed top-0 left-0 origin-left'
      //   style={{
      //     scaleX: scrollYProgress
      //   }}
      //   >

      //   </motion.div>
      //   <h2 className='text-4xl font-bold mb-8'>
      //     Nitin Kumar Jha
      //   </h2>
      //   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque exercitationem dicta quia? Nisi, molestias architecto! Distinctio, excepturi perspiciatis. Qui, voluptas quibusdam quasi quo explicabo nam ut? Laborum ipsa pariatur iure nulla minima aliquam assumenda odio. Eaque, reiciendis nam deleniti atque pariatur illo odit praesentium quos illum quam animi, minus veniam cupiditate maiores voluptatem error nobis temporibus iusto eius. Suscipit, expedita? Excepturi recusandae facere iste voluptas tenetur odit voluptatem ex ipsam modi vel. Nostrum necessitatibus enim cupiditate veritatis ullam corporis id officia, architecto veniam quos voluptate totam saepe illo laborum obcaecati aspernatur tenetur libero! Debitis exercitationem nam dignissimos a laboriosam in repellendus voluptatem similique est molestiae officia recusandae rerum nostrum facilis sequi, molestias id temporibus consequatur ipsa eius doloremque quia obcaecati aliquam? Et, iusto cumque eligendi aut sequi reiciendis ex molestias doloremque illum nostrum, culpa libero facilis corporis dignissimos quam. Eaque dignissimos reiciendis mollitia doloremque, est minus tenetur! Libero est in accusantium sapiente fugiat itaque animi unde nisi dicta incidunt voluptate culpa blanditiis, illo atque maxime ut laborum porro recusandae quas aspernatur nam quam tempore. Voluptas molestiae ratione error totam architecto, odio enim blanditiis repellendus deleniti expedita exercitationem ducimus itaque minima libero placeat inventore vel voluptatum, fuga officiis? Mollitia nesciunt voluptatem amet libero quaerat? Impedit omnis odio saepe quo quisquam, ducimus doloremque, vel non ipsam optio ullam. Cupiditate rerum quo cum atque corporis praesentium non dolores error quod architecto itaque eligendi est, amet iusto, perspiciatis libero corrupti! Rerum, ad recusandae. Accusantium ipsum earum fugiat, et facilis est distinctio, cupiditate eveniet eaque dolorum sapiente provident. Unde sint nemo suscipit. Laboriosam suscipit nulla cum assumenda quo, nihil esse, ratione in accusantium aperiam distinctio dolor consectetur praesentium rerum laborum voluptates ut, ullam rem? Ad suscipit nemo id animi! Eum sequi dolor quos nobis nemo veniam excepturi iste aspernatur porro facilis! Quisquam rerum distinctio optio maxime, vitae qui voluptas, officia incidunt itaque laboriosam aut veniam! Earum at tenetur necessitatibus corporis et voluptas, quos, laborum animi provident architecto facilis soluta cupiditate consequatur excepturi, voluptatem error quae mollitia placeat nesciunt! Quibusdam non delectus labore provident quas qui nisi eligendi magnam excepturi sapiente nam necessitatibus quam hic molestiae odio quisquam aliquid assumenda repellat ipsa aperiam, repellendus rerum veritatis! Modi nam nemo provident delectus repellendus quisquam voluptates architecto dolore unde aliquid harum sequi accusantium minus voluptas, ex asperiores enim quod quos vel error odit. Pariatur ducimus tenetur et nulla non voluptas delectus veniam tempora dicta, officiis nam velit ipsam possimus dolore inventore expedita corporis vero blanditiis accusamus aspernatur aliquid voluptates quibusdam consequatur? Enim quia perspiciatis quis ut, doloribus ducimus delectus unde ea voluptatem dolore magnam amet quaerat veritatis voluptas vitae, hic quidem iste dicta cum nobis et? Id praesentium soluta accusantium suscipit velit, deleniti, totam nisi, ad amet pariatur excepturi. Fugiat, molestias commodi magni quod eveniet nam. Hic quam assumenda vel cum alias, molestias nesciunt perferendis consectetur tempore! Officia dolore quidem ea consectetur debitis maiores est incidunt doloremque nisi sint magnam amet aut, delectus velit similique voluptates! Ut quam recusandae aut ea ratione? Inventore provident officia numquam veritatis deleniti et accusamus, nesciunt fuga placeat ducimus quam. Eos consequuntur, impedit tenetur nobis quibusdam nam adipisci. Porro fugit accusamus voluptate laudantium nesciunt. Iure, deserunt laboriosam dolore repellendus, ipsa sed provident aut aliquam libero dignissimos ea quia perspiciatis. Iusto soluta totam ipsum, itaque quia dolorem dicta praesentium, ut odio optio est, ratione cupiditate in autem cum aperiam obcaecati harum. Pariatur, sunt! Recusandae eligendi possimus nemo rerum, minima laborum quia tenetur fuga! In saepe fugit quae consectetur commodi rem officia numquam libero optio ea tempore magnam id pariatur maiores, iste quisquam temporibus asperiores eum nulla nisi. Beatae quidem tempora necessitatibus rerum enim eum ipsa explicabo nisi esse, laboriosam minima fugit animi, omnis nobis incidunt ducimus, consectetur hic impedit? Incidunt suscipit natus culpa omnis cum eos ab esse necessitatibus odio. Cum accusamus asperiores nulla illo atque quod laudantium unde molestiae amet corporis assumenda repellat animi laboriosam alias ut, eveniet possimus cupiditate fugiat quisquam delectus sequi, enim temporibus sunt distinctio? Eveniet ab ullam officia facere, quis enim commodi deserunt ratione cumque placeat expedita voluptatem rem doloremque ipsam itaque amet, sit nulla sed dolores praesentium a, tempora architecto quaerat. Fugit odio aliquid facere molestiae, ut impedit rerum iure non assumenda voluptatibus modi ducimus reprehenderit corporis atque amet quibusdam suscipit illo sed ad asperiores natus animi illum? Non sapiente distinctio soluta quod aliquam hic. Quidem quod impedit molestiae et cupiditate laboriosam atque repellat harum illo? Sunt quo deleniti quaerat sit aperiam minima incidunt earum fuga iusto beatae? Quo quisquam, error id vero at delectus ab veritatis magni cum? Quos, reprehenderit temporibus neque odit saepe, sit optio quas unde repudiandae doloremque, nobis vel totam numquam consectetur quasi. Repellat, quibusdam eius. Itaque nihil sequi cupiditate corporis rem ad provident iusto sed voluptatem, nobis exercitationem magnam ratione dolorum accusamus consectetur quisquam esse at amet necessitatibus officia distinctio? Eius laborum architecto et cum enim dicta nam consequuntur fuga eum veritatis rem nulla natus molestiae magnam impedit, at maiores. Dolore odit recusandae nostrum voluptate magni, praesentium eum dolores omnis ipsum, maiores culpa fugiat ducimus, nesciunt nulla? Deserunt sequi fuga veritatis atque quis ipsa magni repellat nihil eius, delectus numquam distinctio tempore, cumque saepe quasi voluptate. Voluptatibus fugiat ducimus eius, debitis delectus neque hic repellendus soluta, magni perspiciatis, unde voluptates. Minima, facere architecto repellat modi, vel, laudantium quia exercitationem dolore unde adipisci molestiae nostrum facilis a iure fugit eum libero doloremque? Quos architecto eos fugit labore sint, numquam id nemo ea earum consectetur repellat deserunt vel quidem reiciendis eaque perferendis modi incidunt! Dolor facilis, fugiat beatae necessitatibus eum quos, ut quas iusto minus ducimus quo consequuntur numquam in deleniti alias totam aliquid laudantium sequi iste quisquam eos maiores sed nesciunt. Reiciendis suscipit odit, dolor qui id repellendus corporis quos recusandae dolorum sed vel ullam velit consequuntur aliquid magni provident accusantium blanditiis minus nihil illum laboriosam maiores aspernatur ipsum? Voluptatibus illo dignissimos quam beatae natus modi reiciendis exercitationem? Eius eos voluptatem, culpa et labore iure accusamus facilis provident molestias quo dolores nesciunt quas est quam alias quod inventore, voluptatibus cumque doloremque possimus optio harum?
      // </div>

      <div>
        <SmileyBall/>
      </div>
    
  )
}

export default App