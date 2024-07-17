'use client';

import Link from 'next/link';
import { addProject } from './actions';

export default function Modal() {
  return (
    <div
      style={{
        height: '30%',
        width: '50%',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        position: 'absolute',
      }}
    >
      <Link href='/'>
        <button
          style={{
            borderWidth: '0px',
            color: 'black',
            backgroundColor: 'white',
            borderRadius: '4px',
            margin: '10px',
          }}
        >
          <p style={{ fontSize: '20px' }}>X</p>
        </button>
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <form>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <label htmlFor='name'>Project Name:</label>
            <input
              id='name'
              name='name'
              type='text'
              required
              style={{
                borderWidth: '0px',
                backgroundColor: 'whitesmoke',
                borderRadius: '4px',
                height: '30px',
                width: '200px',
                color: 'black',
                padding: '5px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              width: '300px',
            }}
          >
            <label htmlFor='description'>Description:</label>
            <input
              aria-multiline
              id='description'
              name='description'
              type='text'
              style={{
                borderWidth: '0px',
                backgroundColor: 'whitesmoke',
                borderRadius: '4px',
                height: '30px',
                width: '200px',
                color: 'black',
                padding: '5px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              width: '300px',
            }}
          >
            <label htmlFor='description'>Rows Completed:</label>
            <input
              aria-multiline
              id='rowsCompleted'
              name='rowsCompleted'
              type='number'
              required
              style={{
                borderWidth: '0px',
                backgroundColor: 'whitesmoke',
                borderRadius: '4px',
                height: '30px',
                width: '200px',
                color: 'black',
                padding: '5px',
              }}
            />
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
              width: '300px',
            }}
          >
            <label htmlFor='description'>Total Rows:</label>
            <input
              aria-multiline
              id='totalRows'
              name='totalRows'
              type='number'
              required
              style={{
                borderWidth: '0px',
                backgroundColor: 'whitesmoke',
                borderRadius: '4px',
                height: '30px',
                width: '200px',
                color: 'black',
                padding: '5px',
              }}
            />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '10px',
            }}
          >
            <button
              style={{
                width: '49%',
                borderWidth: '0px',
                backgroundColor: 'whitesmoke',
                borderRadius: '4px',
                color: 'black',
                height: '30px',
              }}
              formAction={addProject}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
