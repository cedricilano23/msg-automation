import { apiHelper } from '../../utils/apiHelper';
import { httpStatus } from '../../data/httpCode';
import { testData, delays } from "../../data/testData";

Feature('API Tests');

Scenario('Should get list of available users and print odd ID users', async ({ I }) => {
  const response = await I.sendGetRequest('api/users');
  const users = response.data.data;
  
  const oddIdUsers = apiHelper.getUsersWithOddIds(users);
  console.log('Users with odd ID numbers:', oddIdUsers);

  I.assertEqual(response.status, httpStatus.OK);
});

Scenario('Should create a new user and verify date', async ({ I }) => {
  const userData = {
    name: 'Test User',
    job: 'testing'
  };
  
  const response = await I.sendPostRequest('api/users', userData);

  const dateCreated = response.data.createdAt.split('T')[0];
  const currentDate = new Date().toISOString().split('T')[0];

  I.assertEqual(dateCreated, currentDate);
  I.assertEqual(response.status, httpStatus.CREATED);
});

Scenario('Should update a user and verify details', async ({ I }) => {
  const userData = {
    name: 'Test User',
    job: 'testing'
  };
  
  const updatedData = {
    name: 'New Test User',
    job: 'New Testing Job'
  };

  await I.sendPostRequest('api/users', userData);
  const updateResponse = await I.sendPutRequest('api/users/2', updatedData);
  
  I.assertEqual(updateResponse.status, httpStatus.OK);
  I.assertEqual(updateResponse.data.name, updatedData.name);
  I.assertEqual(updateResponse.data.job, updatedData.job);
});

Data(delays).Scenario('Should list users with delay', async ({ I, current }) => {
  const startTime = new Date().getTime();

  const response = await I.sendGetRequest(`api/users?delay=${current.delay}`);

  const responseTime = (new Date().getTime() - startTime) / 1000;

  I.assertEqual(response.status, httpStatus.OK);
  I.assertTrue(responseTime < 1);
});
