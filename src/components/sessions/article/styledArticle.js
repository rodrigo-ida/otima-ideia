import styled from 'styled-components'

const StyledArticle = styled.article`

      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr 3fr;
      border-left: 1.5px solid gray;
      header {
        grid-column: 1 / 5;
        grid-row: 1/2;
        border-left: 2px solid black;
        height: 29px;

        .header-content-wrapper {
          margin-left: 10px;

          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          grid-template-rows: 1fr;

          background-color: #f8f8f8;
        }

        .title {
          display: flex;
          align-items: center;
        }

        p {
          padding-left: 10px;
        }

        .duration-wrapper {
          display: flex;
          align-items: center;

          grid-column: 2 / 3;
          grid-row: 1/2;
        }
        .date-wrapper {
          display: flex;
          align-items: center;

          grid-column: 3 / 4;
          grid-row: 1/2;
        }
        .view-wrapper {
          display: flex;
          align-items: center;

          grid-column: 4 / 5;
          grid-row: 1/2;
        }
      }
      .profile-photo {
        grid-column: 1 / 2;
        grid-row: 2/3;
        padding: 20px 0px;
        margin-left: 40px;

        img{
          height: 70px;
          padding-left: 10px;
        }
      }

      .description-wrapper {
        grid-column: 2 / 5;
        grid-row: 2/3;
        padding: 20px 0px;

        .description {
          line-height: 2em;
        }
      }
    
`

export default StyledArticle;