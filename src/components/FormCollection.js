import React from "react";

import { useNavigate } from "react-router-dom";

export default function FormCollection() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    imageUrl: "",
    alt: "",
    name: "",
    email: "",
    website: "",
    jobTitle: "",
    linkedin: "",
    about: "",
    description: "",
    twitter: "",
    facebook: "",
    instagram: "",
    github: "",
  });

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/DigitalCard", { state: { formData } });
  };

  

  return (
    <div className="form-container">
      <h1>Generate a digital card</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            placeholder="Paste your image URL (CORS compying) here"
            value={formData.imageUrl}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Alt:
          <input
            type="text"
            name="alt"
            value={formData.alt}
            placeholder="Image title"
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="text"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />          
        </label>

        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Website:
          <input
            type="text"
            name="website"
            placeholder="http://your-website.com"
            value={formData.website}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Job Title:
          <input
            type="text"
            name="jobTitle"
            placeholder="What do you do?"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          LinkedIn:
          <input
            type="text"
            name="linkedin"
            placeholder="Link to your LinkedIn profile"
            value={formData.linkedin}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          About:
          <textarea
            type="text"
            name="about"      
            value={formData.about}
            onChange={handleChange}
            minLength={200}   
            maxLength={210}
            placeholder="About section must be at least 200 characters long."
            required
          />
          {formData.about.length < 10 && formData.about.length > 0 && (
            <p style={{ color: "red" }}>
              About section must be at least 200 characters long.
            </p>
          )}
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Description section must be at least 130 characters long."
            minLength={130}
            maxLength={131}
            required
          />
          {formData.description.length < 10 && formData.description.length > 0 && (
            <p style={{ color: "red" }}>
              Description section must be at least 130 characters long.
            </p>
          )}
        </label>
        <label>
          Twitter:
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            placeholder="Twitter handle"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Facebook:
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            placeholder="Facebook page URL"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Instagram:
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            placeholder="Instagram username"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Github:
          <input
            type="text"
            name="github"
            value={formData.github}
            placeholder="Github profile link"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
