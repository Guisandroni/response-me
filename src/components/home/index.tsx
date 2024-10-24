import { HomeContainer } from "./styles";

export function Home(){
    return(

        <HomeContainer>
     <nav>
      <details>
        <summary>
          Topicos Sugeridos
        </summary>
        <button>HTML</button>
        <button>Css</button>
        <button>Java</button>
        <button>JavaScript</button>
        <button>React</button>
      </details>

      <details>
        <summary>
          Historico
        </summary>
      <button>Java</button>
      <button>Php</button>
      </details>
     </nav>

      <div>
        <div>
          <span>Ola, eu sou o</span>
          <h1>Response.me</h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque corrupti quod minus quis voluptates aspernatur temporibus minima ad reiciendis odio facere earum consectetur sequi provident, culpa enim, expedita reprehenderit odit.</p>
        </div>

        <div>
          <textarea title='' name="" id=""></textarea>
          <button>Enviar</button>
        </div>

        <div>
          <h1>vosta esta estudante <span>linguagem X</span></h1>

          <div>
            <h2><img src="" alt="" />Pergunta</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla debitis laboriosam ullam asperiores incidunt? Dolorum culpa enim, totam ratione provident a, sit ipsam vitae nisi aperiam beatae tempora nostrum itaque!</p>

          </div>

          <div>
            <h2>Sua resposta</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In fugiat, reiciendis harum animi ipsam eaque maxime fugit necessitatibus tempore odit qui odio earum id ex sint ea itaque voluptas quisquam?</p>

          </div>

          <div>
            <h2>Feedback teach</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam eum inventore placeat excepturi ut voluptates harum quasi nostrum molestiae, culpa modi omnis optio ullam ipsam voluptatibus ea? Iste, ipsa repellendus?</p>

              <div>
                <button>Estudar novo topico</button>
              </div>
          </div>
        </div>

        <footer>
          <p>teache<span>me</span></p>
        </footer>
      </div>

    </HomeContainer>
    )
}