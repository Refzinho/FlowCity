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

                <div className="container-info-lado-direito">
                <div className="text-lado-direito">
                    <h2>Acesse sua conta</h2>
                    <p>Entre com seus dados para continuar.</p>
                </div>
                <div className="forms-login">
                    <form action="">
                    <div className="inputs">
                        <p>E-mail</p>
                        <input className="input-person" type="email" placeholder="seu@email.com"/>
                    </div>
                    <div className="input-person2">
                        <p>Senha</p>
                        <input className="input-div" type="password" placeholder="Digite sua senha"/>
                        <a href="#">Esqueceu sua senha?</a>
                    </div> 
                   

                    <div className="botao-acao-container">
                        <div className="botao-acao">
                            <a href="#">Entrar     <i class="bi bi-arrow-right"></i></a>
                        </div>
                        <div className="botao-acao2">
                            <a href="#"><i class="bi bi-person-add"></i> Criar uma conta</a>
                        </div>
                        
                        
                    </div>                                    
                    </form>

                    <div className="aviso">
                        <p><i class="bi bi-shield-check"></i> Seus dados estão protegidos e são usados apenas 
                        <span className="quebra-linha">para melhorar sua experiência na plataforma.</span></p> 

                    </div>
                </div>
                </div>

            </div>
           </section>
        </>
    );
}