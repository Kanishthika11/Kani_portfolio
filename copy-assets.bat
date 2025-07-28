@echo off
echo Copying assets from original portfolio to React version...

:: Create directories if they don't exist
if not exist "public\img" mkdir "public\img"
if not exist "public\files" mkdir "public\files"

:: Copy images
echo Copying images...
copy "..\portfolio_files\img\header1-img.jpg" "public\img\" 2>nul
copy "..\portfolio_files\img\programming.jpeg" "public\img\" 2>nul
copy "..\portfolio_files\img\project-1.png" "public\img\" 2>nul
copy "..\portfolio_files\img\project-2.png" "public\img\" 2>nul
copy "..\portfolio_files\img\daa (1).png" "public\img\" 2>nul
copy "..\portfolio_files\img\coa.png" "public\img\" 2>nul
copy "..\portfolio_files\img\stat.png" "public\img\" 2>nul
copy "..\portfolio_files\img\about.jpg" "public\img\" 2>nul

:: Copy files
echo Copying files...
copy "..\portfolio_files\files\K Kanishthika-Resume.pdf" "public\files\" 2>nul
copy "..\portfolio_files\files\iitm_foundation.pdf" "public\files\" 2>nul
copy "..\portfolio_files\files\ai_infosys.pdf" "public\files\" 2>nul
copy "..\portfolio_files\files\Blue Professional Business Project Presentation .pptx" "public\files\" 2>nul
copy "..\portfolio_files\files\Business.pptx" "public\files\" 2>nul

echo Assets copied successfully!
echo You can now run: npm install
echo Then run: npm run dev

pause
