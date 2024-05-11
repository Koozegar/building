import * as React from 'react';
import Box from '@mui/material/Box';
import { TreeView } from '@mui/x-tree-view/TreeView';
import { TreeItem } from '@mui/x-tree-view/TreeItem';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './treeView.css';
import { useState } from 'react';



const data = {
	id: 'root',
	title: 'پروژه ها',

	children: [
		{
			"id": "65cf312d52c2c25b64f56910",
			"title": "ساختمان",
			"children": [
				{
					"id": "65cf317a52c2c25b64f5691c",
					"title": "وب اپلیکیشن",
					"children": []
				},
				{
					"id": "65cf318f52c2c25b64f56920",
					"title": "حل مسائل",
					"children": [
						{
							"id": "65cf31b652c2c25b64f56924",
							"title": "مسئله شماره یک و دو",
							"children": []
						}
					]
				}
			]
		},
		{
			"id": "65cf315252c2c25b64f56914",
			"title": "به سوی ظهور",
			"children": [
				{
					"id": "65cf31df52c2c25b64f56928",
					"title": "آخرالزمان",
					"children": []
				}
			]
		},
		{
			"id": "65cf320f52c2c25b64f5692c",
			"title": "بدون زیر پروژه",
			"children": []
		}
	],

};

const TreeView2= () =>  {

	// const [isSelect, setIsSelect] = useState('');


	const getAncestors = (id, children, ancestors = []) => {
		for (let node of children) {
		  if (node.id === id) {
			return ancestors.concat(node.title);
		  }else if (node.id === 'root') return ancestors.concat('پروژه ها')
		  const found = getAncestors(id, node.children, ancestors.concat(node.title));
		  if (found) {
			return found;
		  }
		}
		return undefined;
	  };


	const SelectState =(id) => {
		//  this id is the id of project that will be selected. That id should send to backend. 

		console.log(getAncestors(id,data.children))

		/////////////////////////////// this is the array that should send to previous page  :)
		// this array is the path of new project that user select it. 
	
	};
	
	const renderTree = (nodes) => (
		<Container>

			<TreeItem
			
				sx={{
                    // width:'100hv',
					'& > .MuiTreeItem-content.Mui-selected': {
						color: 'rgba(241, 95, 43, 1)',
					},
					'& .css-1bcfi89-MuiTreeItem-content.Mui-selected': {
						bgColor: '#fff important',
					},
					'& .css-1oqqzyl-MuiContainer-root': {
						marginLeft: '-10%'
					},
					'& .css-i4bv87-MuiSvgIcon-root': {
						marginRight: '-470%',
						marginTop: '-20%'
					},}}
					
			nodeId={nodes.id}
			label={
			
			<Typography
						sx={{
							borderRadius: '45px',
							fontSize: '15px',
							color: 'black',
							mb: '3px',
							p: '8px 20px 8px 8px',
							fontFamily: 'vazir',
							textAlign: 'right',
							bgcolor: 'rgba(241, 95, 43, 0.2)',
							whiteSpace: 'nowrap',
							overflow: 'hidden',
							textOverflow: 'ellipsis',
							":hover": {
								whiteSpace: 'normal',
								border: "2px solid rgba(241, 95, 43, 1)",
								backgroundColor: 'rgba(241, 95, 43, 0.25)',
								overflow: 'visible',
							},
							maxHeight: "30px",
							maxWidth: 'auto',
							height: "fit-content",
                            
						}} >
						{nodes.title}</Typography>}

			
			onClick={() => SelectState(nodes.id)}
			>

				{Array.isArray(nodes.children)
					? nodes.children.map((node) => renderTree(node))
					: null}
			</TreeItem>
		</Container>


	);


	return (
		<Box sx={{
            
			height: '300px',
			width: '460px',
			bgcolor: "white",
			border: "1px solid grey",
			borderRadius: "25px",
			overflow: 'scroll',
			alignContent: 'center',
			right: "15px",
			position: "relative",
		    }}
		    >
			<TreeView
				sx={{
					width:'450px',
				}}
				aria-label="rich object"
				defaultCollapseIcon={<ExpandLessIcon></ExpandLessIcon>}
				defaultExpandIcon={<ExpandMoreIcon></ExpandMoreIcon>}
				defaultExpanded={['root']}
			>
				{renderTree(data)}
			</TreeView>
			{/* <Box 
				sx={{
				top: '200px',
				position: 'relative',
				textAlign: 'center',
				}}>
				<Typography sx={{fontSize: '17px', }}>
					پروژه ای انتخاب نشده است
				</Typography>
				</Box> */}

		</Box>
		
	)
}

export default TreeView2;








