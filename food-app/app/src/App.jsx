import styled from "styled-components";
const App = () => {
  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="./FoodyZone.png" alt="logo" />
          </div>
          <div className="search">
            <input type="text" placeholder="Search food" />
          </div>
        </TopContainer>
      </Container>
    </>
  );
};

export default App;

const Container = styled.div`
  background-color: #323334;
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-item: center;

  .search{
    input{
      background: tranceparent;
      border: 1px solid red;
      color: white;
      botder-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;
