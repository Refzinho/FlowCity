"use client";
import "@/app/login/login.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { RocketTakeoff } from 'react-bootstrap-icons';

export default function Login(){



    return(
        <>

           <section className="page-login">
            
            <div className="lado-esquerdo">

               <div className="img-lado-esquerdo">
                <img className="img-logo" src="imagens/logo.png" alt="" />
               </div>
                
                <div className="text-lado-esquerdo">
                    <h1>Mais informação <span className="quebra-linha">para uma cidade</span><span className="quebra-linha">mais segura.</span></h1>
                    <p>Acompanhe, registre e consulte relatos de <span className="quebra-linha">ocorrências por região. Juntos por uma</span><span>comunidade mais informada.</span></p>
                </div>
                    
                    <div className="icon-lado-esquerdo">
            
                        <div className="icon">

                        <i className="bi bi-geo-alt"></i>
                        <h3>Mapa interativo</h3>
                        <p>Visualize relatos por <span className="quebra-linha">localização.</span></p>

                        </div>

                        <div className="icon">
                            
                        <i className="bi bi-file-earmark-plus"></i>   
                        <h3>Mapa interativo</h3>
                        <p>Visualize relatos por <span className="quebra-linha">localização.</span></p>

                        </div>

                        <div className="icon">

                        <i className="bi bi-shield-check"></i>
                        <h3>Mapa interativo</h3>
                        <p>Visualize relatos por <span className="quebra-linha">localização.</span></p>   

                        </div>
                    </div>
                    </div>
            <div className="lado-direito">
                <h2>Acesse sua conta</h2>
                <p>Entre com seus dados para continuar.</p>
                <div className="forms-login">
                    <form action="">
                    <div className="input-div">
                        <p>E-mail</p>
                        <input className="input-person" type="email" placeholder="seu@email.com"/>
                    </div>
                    <div className="input-person">
                        <p>Senha</p>
                        <input className="input-div" type="password" placeholder="Digite sua senha"/>
                    </div>
                    <a href="#">Esqueceu sua senha?</a>

                    <a href="#">Entrar <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"/>
                                        </svg></a>
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
                                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4"/>
                                    <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z"/>
                                    </svg> Criar uma conta</a>
                                                        
                    </form>

                    <div>
                        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-check" viewBox="0 0 16 16">
                        <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
                        <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
                        </svg>  Seus dados estão protegidos e são usados apenas <span className="quebra-linha">para melhorar sua experiência na plataforma.</span></p> 

                    </div>
                </div>
            </div>
           </section>
        </>
    );
}