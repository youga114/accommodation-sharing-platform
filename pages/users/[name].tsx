import css from "styled-jsx/css";

const Style = css`
  h2 {
    margin-left: 20px;
  }
  .user-bio {
    margin-top: 12px;
    font-style: italic;
  }
`;
const username = ({ user }: { user: { name: string; bio: string } }) => {
  return (
    <>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <p className="user-bio">{user.bio}</p>
        </div>
      ) : (
        <div>유저 정보가 없습니다</div>
      )}
      <style jsx>{style}</style>
    </>
  );
};
export default username;
