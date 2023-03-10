import React from "react";
import StubContainer from "./StubContainer";
import UpcomingConcerts from "./UpcomingConcerts";
import FavoritesContainer from "./FavoritesContainer";
import UpdateProfileForm from "./UpdateProfileForm";
import { useHistory } from "react-router-dom";
import { Button } from "@mantine/core";
import { useState } from "react";

const Profile = ({ user, setUser, handleUpdateUser }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  function handleUpdate() {
    setShow((show) => !show);
  }

  function handleDelete() {
    fetch(`/users/${user.id}`, {
      method: "DELETE",
    });

    fetch("/logout", {
      method: "DELETE",
    });
    history.push(`/`);
    setUser(null);
    window.location.reload();
  }

  return (
    <div>
      <div className="update-profile">
        <Button
          onClick={() => setShow((show) => !show)}
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
        >
          {" "}
          {show ? "Cancel Update" : "Update Profile"}
        </Button>
        {show ? (
          <UpdateProfileForm user={user} handleUpdate={handleUpdate} handleUpdateUser={handleUpdateUser} />
        ) : null}
        <Button
          onClick={handleDelete}
          variant="light"
          color="red"
          fullWidth
          mt="md"
          radius="md"
        >
          Delete Profile
        </Button>
      </div>
      <br></br>
      <h2 className="page-header">{user.first_name}'s profile</h2>
      <h4>
        Your concert stubs and your favorite band + genres
      </h4>

      {/* <UpcomingConcerts user={user}/> */}
      <FavoritesContainer
        genre_1={user.genre_1}
        genre_2={user.genre_2}
        genre_3={user.genre_3}
        favorite_band={user.favorite_band}
      />
      <StubContainer user={user} />

    </div>
  );
};

export default Profile;
