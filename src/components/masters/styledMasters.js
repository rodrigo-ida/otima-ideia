import styled from "styled-components";

const StyledMasters = styled.section`
  margin-top: 18vh;
  box-shadow: 50px 0px 99px #6464640F;
  border-radius: 30px;


  .masters-list {
    display: flex;
    flex-wrap: wrap;
    padding: 5%;


    .list-item{
        width: 20%;
        padding-bottom: 20px;
        
        article{
            

            figure{



                img{
                    width: 70%;
                    padding-bottom: 15px;

                }

                figcaption{
                    padding-bottom: 10px;
                    font-weight: bolder;

                }
                p{
                    font-size: 0.7rem;
                }
            }
        }
        
    }

  }
`;

export default StyledMasters;
