import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const MusicPlayChart = () => {
    const data = [
        {
            id: 'audio',
            data: [
                { x: '2023-11-01', y: 5, musicName: 'Audio Song A', duration: '3:30', singer: 'Audio Artist A' },
                { x: '2023-11-02', y: 8, musicName: 'Audio Song B', duration: '4:15', singer: 'Audio Artist B' },
                { x: '2023-11-03', y: 4, musicName: 'Audio Song C', duration: '3:10', singer: 'Audio Artist C' },
                { x: '2023-11-04', y: 7, musicName: 'Audio Song D', duration: '4:45', singer: 'Audio Artist D' },
                { x: '2023-11-05', y: 6, musicName: 'Audio Song E', duration: '3:55', singer: 'Audio Artist E' },
                { x: '2023-11-06', y: 3, musicName: 'Audio Song F', duration: '2:40', singer: 'Audio Artist F' },
                { x: '2023-11-07', y: 9, musicName: 'Audio Song G', duration: '5:20', singer: 'Audio Artist G' },
                { x: '2023-11-08', y: 2, musicName: 'Audio Song H', duration: '2:15', singer: 'Audio Artist H' },
                { x: '2023-11-09', y: 4, musicName: 'Audio Song I', duration: '3:30', singer: 'Audio Artist I' },
                { x: '2023-11-10', y: 7, musicName: 'Audio Song J', duration: '4:10', singer: 'Audio Artist J' },
            ],
        },
        {
            id: 'video',
            data: [
                { x: '2023-11-01', y: 2, musicName: 'Video Song A', duration: '3:30', singer: 'Video Director A' },
                { x: '2023-11-02', y: 2, musicName: 'Video Song B', duration: '4:15', singer: 'Video Director B' },
                { x: '2023-11-03', y: 4, musicName: 'Video Song C', duration: '3:10', singer: 'Video Director C' },
                { x: '2023-11-04', y: 6, musicName: 'Video Song D', duration: '4:45', singer: 'Video Director D' },
                { x: '2023-11-05', y: 1, musicName: 'Video Song E', duration: '3:55', singer: 'Video Director E' },
                { x: '2023-11-06', y: 6, musicName: 'Video Song F', duration: '2:40', singer: 'Video Director F' },
                { x: '2023-11-07', y: 3, musicName: 'Video Song G', duration: '5:20', singer: 'Video Director G' },
                { x: '2023-11-08', y: 2, musicName: 'Video Song H', duration: '2:15', singer: 'Video Director H' },
                { x: '2023-11-09', y: 1, musicName: 'Video Song I', duration: '3:30', singer: 'Video Director I' },
                { x: '2023-11-10', y: 1, musicName: 'Video Song J', duration: '4:10', singer: 'Video Director J' },
            ],
        },
    ];

    return (
        <div style={{ height: '400px' }}>
            <ResponsiveLine
                data={data}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'time', format: '%Y-%m-%d', useUTC: false, precision: 'day' }}
                xFormat="time:%b %d"
                yScale={{ type: 'linear', min: 0, max: 'auto', stacked: false, reverse: false }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    format: '%b %d',
                    tickValues: 'every 1 day',
                    legend: 'Date',
                    legendOffset: 36,
                    legendPosition: 'middle',
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Number of Plays',
                    legendOffset: -40,
                    legendPosition: 'middle',
                }}
                enableGridX={false}
                colors={{ scheme: 'category10' }}
                enablePoints={true}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabelYOffset={-12}
                useMesh={true}
                legends={[
                    {
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 100,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 80,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1,
                                },
                            },
                        ],
                    },
                ]}
            />
        </div>
    );
};

export default MusicPlayChart;
