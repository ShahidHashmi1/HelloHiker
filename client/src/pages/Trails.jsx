import React, { useState, useEffect } from 'react';
import { Jumbotrol, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import Auth from '../utils/auth';
import { saveTrailIds, getSavedTrailIds } from '../utils/localStorage';
import { useMutation } from '@apollo/client';
import { ADD_TRAIL } from '../utils/mutations';
import trailData from '../components/Trails/trailData';

const SearchTrails = () => {
  const [searchTrails, setSearchedTrails] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [saveTrailIds, setSavedTrailIds] = useState(getSavedTrailIds());

  const [addTrail, { error }] = useMutation(ADD_TRAIL);

  useEffect(() => {
    return () => saveTrailIds(saveTrailIds);
  }); 

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput) {
      return false;
    }

    try {
        const trailData = trailData.map((trails) => ({
        name: trails.name,
        description: trails.description,
        image: trails.image,
        link: trails.link
      }));

      setSearchedTrails(trailData);
      setSearchInput('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleSaveTrails = async (trailId) => {
    const trailToSave = searchTrails.find((trails) => trails.trailId === trailId);
    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    try {
      const { data } = await addTrail({
        variables: { newTrail: {...trailToSave } },
      });

      setSavedTrailIds([...saveTrailIds, trailToSave.trailId])
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>TRAILTEST</h1>
    </div>
  )
}


export default SearchTrails