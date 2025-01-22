import React from 'react';
import { Card, Image, Text, Avatar, Group, Button } from '@mantine/core';
import ReactStars from 'react-stars';

const FeedbackCard = ({ feedbackData }) => {
  return (
    <Card  shadow="sm" padding="lg" radius="md" withBorder>
   
      <Group position="apart" mb="md">
        <Group>
          <Avatar src={feedbackData.photo} alt="User Photo" radius="xl" size="lg" />
          <div>
            <Text weight={500}>{feedbackData.name || "Anonymous"}</Text>
            <Text size="xs" color="dimmed">{feedbackData.email}</Text>
          </div>
        </Group>
      </Group>

      <Text size="sm" weight={500} mb="xs">
        {feedbackData.camp_name || "Unknown"}
      </Text>

    
      <Text size="sm" color="dimmed" mb="md">
        {feedbackData.feedback || "No feedback provided yet."}
      </Text>


      <ReactStars
        count={5}
        value={feedbackData.rating || 0}
        size={24}
        edit={false}
        half={true}
        color2={"#ffd700"}
      />

  
    </Card>
  );
};

export default FeedbackCard;
