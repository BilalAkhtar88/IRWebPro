function boxPlotRes()

close all;
clc;
clear all;

filename = 'Results.xlsx';
sheet = 1;

p123 = chi2cdf([11.76470588,	35.29411765,	52.94117647,], [95,75,55])

usersV = xlsread(filename,sheet,'A1:A114');
timesV = xlsread(filename,sheet,'B1:B114');
mapsV = xlsread(filename,sheet,'D1:D114');
topicsV = xlsread(filename,sheet,'E1:E114');

timesV75And95 = xlsread(filename,sheet,'P1:P80');
mapsV75And95 = xlsread(filename,sheet,'Q1:Q80');

pTimeVTopicAll = anova1(timesV, topicsV)
pTimeVUserAll = anova1(timesV, usersV)
pTimeVMapsAll = anova1(timesV, mapsV)
pTimeVMaps75to95 = anova1(timesV75And95, mapsV75And95)

figure(9)
boxplot(timesV, mapsV)
xlabel('MAP Values')
ylabel('Time in seconds')
title('MAP Versus Performance')

figure(10)
boxplot(timesV75And95, mapsV75And95)
xlabel('MAP Values')
ylabel('Time in seconds')
title('MAP 95 and 75 only Versus Performance')

end























% x1 = 0;
% x2 = 0;
% x3 = 0;
% 
% i95 = 1;
% i75 = 1;
% i55 = 1;
% 
% for i = 1:68
%     if(mapVal(i) == 95)
%         x1(i95) = timeVal(i);
%         i95 = i95 + 1;
%     elseif(mapVal(i) == 75)
%         x2(i75) = timeVal(i);
%         i75 = i75 + 1;
%     elseif(mapVal(i) == 55)
%         x3(i55) = timeVal(i);
%         i55 = i55 + 1;
%     end
%     i = i + 1;
% end
% length(x1)
% length(x2)
% length(x3)



% [p1,h1,stats1] = ranksum(usersV, timesV)
% [p2,h2,stats2] = ranksum(mapsV, timesV)
% [p3,h3,stats3] = ranksum(topicsV, timesV)

% figure(1)
% boxplot(timesV, mapsV)
% xlabel('MAP Values')
% ylabel('Time in seconds')
% title('MAP Versus Performance')
% 
% figure(2)
% boxplot(timesV, topicsV)
% xlabel('Topic Numbers')
% ylabel('Time in seconds')
% title('Topics Versus Performance')
% 
% figure(3)
% boxplot(timesV, usersV)
% xlabel('Topic Numbers')
% ylabel('Time in seconds')
% title('Topics Versus Performance')

%boxplot([x1,x2,x3],'Notch','on','Labels',{'MAP = 55','MAP = 75','MAP = 95'})
%title('Compare Performance and MAP')