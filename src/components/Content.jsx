import { useState, useEffect } from "react";

export default function Content() {
  const [contentVisible, setContentVisible] = useState(false);
  const [welcomeModalVisible, setWelcomeModalVisible] = useState(true);
  const [welcomeModalNoMouse, setWelcomeModalNoMouse] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setWelcomeModalVisible(false);
    }, 1500);
    setTimeout(() => {
      setContentVisible(true);
      setWelcomeModalNoMouse(true);
    }, 2500);
  }, []);

  return (
    <>
      <div
        id="welcome-modal"
        className={`${!welcomeModalVisible ? "hidden" : null} 
          ${welcomeModalNoMouse ? "no-mouse" : null}`}
      >
        <p id="welcome-text">Welcome</p>
      </div>
      <div id="content-container" className={contentVisible ? "visible" : null}>
        <h1 id="hero-header">
          Hi, I&apos;m <span id="name">Damian.</span>
        </h1>
        <p id="hero-subtext">I&apos;m a full stack developer.</p>
        <div id="test">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
          ducimus odit hic voluptas itaque ipsa cum in tempora consectetur fugit
          eos quos facilis accusamus quasi, sit cupiditate labore tempore, dicta
          sed atque nisi aliquid! Architecto ab eaque temporibus vero maiores
          eum aut commodi ipsa dolorem sunt quas ipsum officiis, est, eligendi,
          voluptatum et laborum repellendus assumenda quasi? Eligendi totam
          dolorem quisquam maiores aliquam explicabo. Incidunt velit placeat,
          nobis cupiditate iure voluptas saepe eligendi, consectetur vero est
          tempora omnis a optio labore iste eveniet. Quasi animi excepturi
          dolorum quibusdam neque dolore delectus! Placeat quas repellendus
          expedita ipsam? Modi nulla adipisci odit aliquam, vitae debitis quasi.
          Eaque voluptas, fugiat accusamus earum officiis est a, quas atque
          quidem iusto laborum voluptatum cupiditate? Nesciunt omnis a odio
          autem eius suscipit nemo dolorem totam. Ipsam, quam voluptas deleniti
          asperiores esse iste et exercitationem laboriosam repellendus quos
          explicabo cumque temporibus totam incidunt ducimus laborum earum
          soluta accusantium aut enim voluptatibus eveniet voluptates.
          Voluptatum aut expedita laudantium, ducimus voluptas at deleniti
          maiores aliquam nihil itaque rem officiis quos, facilis atque
          doloremque quas similique totam nisi. Dolore magni, voluptatem ipsum
          temporibus, cum laudantium fuga impedit explicabo perspiciatis ratione
          architecto, autem dolores laboriosam soluta sequi consequatur sed in.
        </div>
        <div id="test">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
          ducimus odit hic voluptas itaque ipsa cum in tempora consectetur fugit
          eos quos facilis accusamus quasi, sit cupiditate labore tempore, dicta
          sed atque nisi aliquid! Architecto ab eaque temporibus vero maiores
          eum aut commodi ipsa dolorem sunt quas ipsum officiis, est, eligendi,
          voluptatum et laborum repellendus assumenda quasi? Eligendi totam
          dolorem quisquam maiores aliquam explicabo. Incidunt velit placeat,
          nobis cupiditate iure voluptas saepe eligendi, consectetur vero est
          tempora omnis a optio labore iste eveniet. Quasi animi excepturi
          dolorum quibusdam neque dolore delectus! Placeat quas repellendus
          expedita ipsam? Modi nulla adipisci odit aliquam, vitae debitis quasi.
          Eaque voluptas, fugiat accusamus earum officiis est a, quas atque
          quidem iusto laborum voluptatum cupiditate? Nesciunt omnis a odio
          autem eius suscipit nemo dolorem totam. Ipsam, quam voluptas deleniti
          asperiores esse iste et exercitationem laboriosam repellendus quos
          explicabo cumque temporibus totam incidunt ducimus laborum earum
          soluta accusantium aut enim voluptatibus eveniet voluptates.
          Voluptatum aut expedita laudantium, ducimus voluptas at deleniti
          maiores aliquam nihil itaque rem officiis quos, facilis atque
          doloremque quas similique totam nisi. Dolore magni, voluptatem ipsum
          temporibus, cum laudantium fuga impedit explicabo perspiciatis ratione
          architecto, autem dolores laboriosam soluta sequi consequatur sed in.
        </div>
        <div id="test">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
          ducimus odit hic voluptas itaque ipsa cum in tempora consectetur fugit
          eos quos facilis accusamus quasi, sit cupiditate labore tempore, dicta
          sed atque nisi aliquid! Architecto ab eaque temporibus vero maiores
          eum aut commodi ipsa dolorem sunt quas ipsum officiis, est, eligendi,
          voluptatum et laborum repellendus assumenda quasi? Eligendi totam
          dolorem quisquam maiores aliquam explicabo. Incidunt velit placeat,
          nobis cupiditate iure voluptas saepe eligendi, consectetur vero est
          tempora omnis a optio labore iste eveniet. Quasi animi excepturi
          dolorum quibusdam neque dolore delectus! Placeat quas repellendus
          expedita ipsam? Modi nulla adipisci odit aliquam, vitae debitis quasi.
          Eaque voluptas, fugiat accusamus earum officiis est a, quas atque
          quidem iusto laborum voluptatum cupiditate? Nesciunt omnis a odio
          autem eius suscipit nemo dolorem totam. Ipsam, quam voluptas deleniti
          asperiores esse iste et exercitationem laboriosam repellendus quos
          explicabo cumque temporibus totam incidunt ducimus laborum earum
          soluta accusantium aut enim voluptatibus eveniet voluptates.
          Voluptatum aut expedita laudantium, ducimus voluptas at deleniti
          maiores aliquam nihil itaque rem officiis quos, facilis atque
          doloremque quas similique totam nisi. Dolore magni, voluptatem ipsum
          temporibus, cum laudantium fuga impedit explicabo perspiciatis ratione
          architecto, autem dolores laboriosam soluta sequi consequatur sed in.
        </div>
        <div id="test">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste amet
          ducimus odit hic voluptas itaque ipsa cum in tempora consectetur fugit
          eos quos facilis accusamus quasi, sit cupiditate labore tempore, dicta
          sed atque nisi aliquid! Architecto ab eaque temporibus vero maiores
          eum aut commodi ipsa dolorem sunt quas ipsum officiis, est, eligendi,
          voluptatum et laborum repellendus assumenda quasi? Eligendi totam
          dolorem quisquam maiores aliquam explicabo. Incidunt velit placeat,
          nobis cupiditate iure voluptas saepe eligendi, consectetur vero est
          tempora omnis a optio labore iste eveniet. Quasi animi excepturi
          dolorum quibusdam neque dolore delectus! Placeat quas repellendus
          expedita ipsam? Modi nulla adipisci odit aliquam, vitae debitis quasi.
          Eaque voluptas, fugiat accusamus earum officiis est a, quas atque
          quidem iusto laborum voluptatum cupiditate? Nesciunt omnis a odio
          autem eius suscipit nemo dolorem totam. Ipsam, quam voluptas deleniti
          asperiores esse iste et exercitationem laboriosam repellendus quos
          explicabo cumque temporibus totam incidunt ducimus laborum earum
          soluta accusantium aut enim voluptatibus eveniet voluptates.
          Voluptatum aut expedita laudantium, ducimus voluptas at deleniti
          maiores aliquam nihil itaque rem officiis quos, facilis atque
          doloremque quas similique totam nisi. Dolore magni, voluptatem ipsum
          temporibus, cum laudantium fuga impedit explicabo perspiciatis ratione
          architecto, autem dolores laboriosam soluta sequi consequatur sed in.
        </div>
      </div>
    </>
  );
}
