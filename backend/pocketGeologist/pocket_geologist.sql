-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 02, 2023 at 11:24 PM
-- Server version: 10.6.11-MariaDB-0ubuntu0.22.04.1
-- PHP Version: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pocket_geologist`
--

-- --------------------------------------------------------

--
-- Table structure for table `hand_samples`
--

CREATE TABLE `hand_samples` (
  `id` int(10) NOT NULL,
  `mineral` varchar(60) NOT NULL,
  `color` varchar(60) NOT NULL,
  `streak` varchar(60) NOT NULL,
  `luster` varchar(60) NOT NULL,
  `hardness` varchar(60) NOT NULL,
  `transparency` varchar(60) NOT NULL,
  `op` varchar(60) NOT NULL,
  `sg` varchar(60) NOT NULL,
  `fracture` varchar(60) NOT NULL,
  `habit` varchar(60) NOT NULL,
  `image_path` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `group` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci COMMENT='table of mineral properties';

--
-- Dumping data for table `hand_samples`
--

INSERT INTO `hand_samples` (`id`, `mineral`, `color`, `streak`, `luster`, `hardness`, `transparency`, `op`, `sg`, `fracture`, `habit`, `image_path`, `description`, `group`) VALUES
(1, 'milky quartz', 'white', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'concoidal', 'prismatic', 'images/fbyQLUni0Wqhnwg9Exe44Ihh6OdD5B2yIcm5Nh6O.jpg', 'Milk quartz or milky quartz is the most common variety of crystalline quartz. The white color is caused by minute fluid inclusions of gas, liquid, or both, trapped during crystal formation, making it of little value for optical and quality gemstone applications.', 'quartz'),
(2, 'amethyst', 'purple', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'concoidal', 'prismatic', 'images/iCdYNPYRcrqAlMU6REzJicu4SonSiESvaYCQYJcO.jpg', 'Amethyst is the purple variety of the quartz mineral species. It\'s the gem that\'s most commonly associated with the color purple, even though there are other purple gems such as sapphire and tanzanite. Its purple color can be cool and bluish, or a reddish purple that\'s sometimes referred to as “raspberry.”', 'quartz'),
(3, 'quartz (rock crystal)', 'colorless', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'concoidal', 'prismatic', 'images/zt0IXuCrNKjci9FcfAHHqPXjYnGPkOT3zkzZWkVR.jpg', 'rock crystal is a transparent variety of the silica mineral quartz valued for its clarity and total lack of color or flaws. Vessels and spheres have been carved from large crystals since ancient times, and the application of the word crystal to fine glassware derives from this practice.', 'quartz'),
(4, 'rose quartz', 'pink', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'concoidal', 'prismatic', 'images/jsfQd4Sd9SZdyrCkBbiJkPU47lIAuUt50gy0rrJm.jpg', 'Rose quartz is one of the many quartz varieties used as a gem material. It gets its name from its delicate pink color, which ranges from very light (almost white) to medium dark. The most appealing color typically occurs in larger sizes, and small rose quartz specimens with good color tend to be rare.', 'quartz'),
(5, 'smokey quartz', 'brown', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'concoidal', 'prismatic', 'images/D8ujD3ifcLBHLX00jGOatIr3JcoslGFQzc35HAYr.jpg', 'Smoky quartz is a brownish-grey, translucent variety of quartz that ranges in clarity from almost complete transparency to an almost-opaque brownish-gray or black crystals. The smoky color results from free silicon formed from the silicon dioxide by natural irradiation.', 'quartz'),
(11, 'Rubellite', 'purple_lilac/pink', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'uneven', 'prismatic', 'images/OKwE5eInFPf5iM04eU2vo2PDL8vcp4y2zaQB8FeA.jpg', 'Purple (Siberite): Purple tourmaline is all about serene energy. The stone is reported to ground and protect you, as well as help you deeply relax. With that, siberite helps release emotional attachments, so you can look at the world with a nonjudgmental view.', 'tourmaline'),
(14, 'schorl', 'black', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'uneven', 'prismatic', 'images/9eoj7z7V0NpFu3xGnNuV9y5rqMhbOy64q1EbiHxE.jpg', 'Tourmaline has a variety of colors. Iron-rich tourmalines are usually black to bluish-black to deep brown, while magnesium-rich varieties are brown to yellow, and lithium-rich tourmalines are almost any color: blue, green, red, yellow, pink, etc.', 'tourmaline'),
(15, 'elbaite', 'green', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'uneven', 'prismatic', 'images/5SuZicli2XL9ewhNUO7mOb5p2FnYWTO12yE8t6TE.jpg', 'Green tourmaline is also known as verdilite. Green Tourmaline is a unique miracle of color. Often two or more colors are found in a single tourmaline crystal making a bi-color tourmaline. Also rare are tourmaline gems which appear to change their color and cat\'s eye green tourmalines.', 'tourmaline'),
(19, 'dravite', 'brown', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'uneven', 'prismatic', 'images/7cp5IoNhUAuXx98LinAwrLI40xD79El4TxKpCgn9.jpg', 'Green tourmaline is also known as verdilite. Green Tourmaline is a unique miracle of color. Often two or more colors are found in a single tourmaline crystal making a bi-color tourmaline. Also rare are tourmaline gems which appear to change their color and cat\'s eye green tourmalines.', 'tourmaline'),
(20, 'uvite', 'brown-red-green', 'colorless', 'vitreous', '7-8', 'translucent', 'none', 'medium', 'uneven', 'prismatic', 'images/AKRJ5g2OtyxK3YJ723cUNbgSO84Ufkr8OMT8UsZT.jpg', 'Green tourmaline is also known as verdilite. Green Tourmaline is a unique miracle of color. Often two or more colors are found in a single tourmaline crystal making a bi-color tourmaline. Also rare are tourmaline gems which appear to change their color and cat\'s eye green tourmalines.', 'tourmaline'),
(21, 'galena', 'gray-silver', 'lead gray', 'metalic', '2-3', 'opaque', 'none', 'high', 'subconchoidal', 'cubic', 'images/YTxgWSAQbVdL0DIiufqPYBjzflR2DO8LE6ZXpDsv.jpg', 'Galena, also called lead glance, is the natural mineral form of lead(II) sulfide (PbS). It is the most important ore of lead and an important source of silver.[5]. Galena is one of the most abundant and widely distributed sulfide minerals. It crystallizes in the cubic crystal system often showing octahedral forms. It is often associated with the minerals sphalerite, calcite and fluorite.', 'sulphides'),
(26, 'biotite', 'green', 'white-gray', 'vitreous', '2-3', 'transparent-opaque', 'none', 'medium', 'flaky', 'monoclinic', 'images/qvl3SMO9TWOIFAsIvCMhRCIdWmR272IYcBCKQecf.jpg', 'A generally black or dark green form of mica that is a constituent of crystalline rocks and consists of a silicate of iron, magnesium, potassium, and aluminum.', 'mica'),
(27, 'plagioclase', 'white', 'white', 'vitreous', '6-7', 'transluscent', 'none', 'medium', 'two direction 90 degrees', 'subhedral to anhedral', 'images/3G9eKG31gdQrulZCiRx0halbYT1hV6qvD3YjuZwc.jpg', 'plagioclase, any member of the series of abundant feldspar minerals usually occurring as light-coloured, glassy, transparent to translucent, brittle crystals.', 'feldspar'),
(28, 'sandstone', 'sandi', 'streaki', 'sandi', 'sandi', 'transparenti', 'sandi', 'sandi', 'sandi', 'sandi', 'images/fqrFjfrIENx9WALN7jKHHaE9lywqFo7DL9IWPEkV.jpg', 'description of sandi', 'rocks'),
(29, 'microcline', 'pink', 'white', 'vitreous', '6-7', 'transparent,translucent', 'none', 'medium', 'uneven', 'massive,tabular', 'images/ZigvCJYAbOxnGCroSkkVNhoYq2g9uuqJI8hTJMfw.jpg', 'Microcline (KAlSi3O8) is an important igneous rock-forming tectosilicate mineral. It is a potassium-rich alkali feldspar. Microcline typically contains minor amounts of sodium. It is common in granite and pegmatites.', 'feldspar'),
(30, 'orthoclase', 'green,yello', 'white', 'vitreous,pearly on cleavage', '6', 'transparent,translucent', 'none', 'medium', 'uneven', 'anhedral,euhedral', 'images/mGe1WLaOJ8pJBB4RY4LVKsNKKGXU9BijkUBVV9Y2.jpg', 'Orthoclase is a feldspar mineral with a chemical composition of KAlSi3O8. It is one of the most abundant rock-forming minerals of the continental crust. Orthoclase is most widely known as the pink feldspar found in many granites and as the mineral assigned a hardness of \"6\" in the Mohs hardness scale.', 'feldspar');

-- --------------------------------------------------------

--
-- Table structure for table `tests`
--

CREATE TABLE `tests` (
  `id` int(200) NOT NULL,
  `title` varchar(60) NOT NULL,
  `image_path` varchar(60) DEFAULT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tests`
--

INSERT INTO `tests` (`id`, `title`, `image_path`, `description`) VALUES
(1, 'Streak', 'images/xVW15pZKmuWy5AEPJoK9IwNwyqbVDhWUCRtWT9xj.jpg', '<p>The streak test is done by scraping an edge of the mineral across a piece of \r\n                unglazed porcelain known as a \"streak plate.\" This can produce a small amount \r\n                of powdered mineral on the surface of the plate. The color of the streak can \r\n                help to identify the unknown mineral.</p>\r\n               <p> The streak test works only with minerals that are softer than the streak plate. The plate itself has a mohr’s hardness of 7. A point to note is that mohr’s hardness scale is none linear. Corundum has a hardness of 10 and is considered the second hardest naturally occurring mineral. Diamond is the hardest and it is several orders of magnitude harder than corundum. This means only diamond can scratch diamond and corundum can scratch itself and all the softer minerals.</p>'),
(2, 'Luster', 'images/gH7BSYHpVRAbQXbOSiz2z44hhCNF9E8E3oyF9sdb.jpg', '<p>Minerals are primarily divided into the two categories of metallic and nonmetallic luster. Minerals possessing metallic luster are opaque and very reflective, possessing a high absorptive index. This type of luster indicates the presence of metallic bonding within the crystal lattice of the material. Examples of minerals which exhibit metallic luster are native copper, gold, and silver, galena, pyrite, and chalcopyrite. The luster of a mineral which does not quite possess a metallic luster is termed submetallic; hematite provides an example of submetallic luster.<p/>\r\n<p>\r\nThe property of streak can aid in distinguishing whether a specimen has a metallic or a nonmetallic luster. Metals tend to be soft, implying that more powdered material may be obtained from the streak sample of a metal than a nonmetal. Metals are also opaque, transmitting no light. Minerals which possess a metallic luster therefore tend to exhibit a thick, dense, dark streak whereas those which possess a nonmetallic luster tend to produce a thinner, less dense streak which is also lighter in color.\r\n</p>\r\n<p>\r\nAdjectives such as \"vitreous\', \'dull\', \'pearly\', \'greasy\', \'silky\' or \'adamantine\' are frequently used to describe various types of nonmetallic luster.\r\nDull or Earthy\r\nMinerals of dull or earthy luster reflect light very poorly and do not shine. This type of luster is often seen in minerals which are composed of an aggregate of tiny grains.</p>\r\n<h3>Resinous</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/Kj1A1rC3Fpu3BS9jd7mqShlMHCcrQaR9Aewe4D9g.jpg\" alt=\"galena\"/>\r\n<p>\r\nA surface of resinous luster possesses a sheen resembling that of resin. Such materials have a refractive index greater than 2.0. Sphalerite (ZnS) demonstrates a resinous luster.</p>\r\n<h3>Pearly</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/un3BvKMJqY1eTxLb0dnmAheGOMTWjAFXbbPSsWed.jpg\" alt=\"galena\"/>\r\n<p>\r\nPearly luster appears iridescent, opalescent, or pearly. This is typically exhibited by mineral surfaces which are parallel to planes of perfect cleavage. Layer silicates such as talc often demonstrate a pearly luster on cleavage surfaces.</p>\r\n<h3>Greasy</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/JFUDeoeRe8sEeTKBFEs2TFv0MMiMVeVMBqWh40Wn.jpg\" alt=\"galena\"/>\r\n<p>\r\nA surface which possesses greasy luster appears to be covered with a thin layer of oil. A light-scattering surface which is slightly rough, such as that of nepheline, may exhibit greasy luster.</p>\r\n<h3>Silky</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/OmE6gbhLmy8bvgqzbJpTn0S7R9D1PfWYdpJRS9P9.jpg\" alt=\"galena\"/>\r\n<p>\r\nSilky luster occurs when light is reflected off of an aggregate of fine parallel fibers; malachite and serpentine may both exhibit silky luster.</p>\r\n<h3>Vitreous</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/pZgEqSJXoaJzgBwq1fbGcHiuZY4ywqdmB34UCs0B.jpg\" alt=\"galena\"/>\r\n<p>\r\nVitreous luster occurs in minerals with predominant ionic bonding and resembles the reflective quality of broken glass. The refractive index of such minerals is 1.5 to 2.0. Many silicates possess this type of luster; quartz and tourmeline both demonstrate vitreous luster.</p>\r\n<h3>Adamantine or brilliant</h3>\r\n<img class=\"test-img\" loading=\"lazy\" src=\"http://localhost:8000/images/eaf4nFxD2vliNQr1wwDALpcRNudJThAhdr43mGU1.jpg\" alt=\"galena\"/>\r\n<p>\r\nA brilliant luster such as the sparkling reflection of diamond is known as adamantine. Minerals of adamantine luster have high refractive indices (1.9-2.6) and are highly dispersive and translucent. Covalent bonding or the presence of heavy metal atoms or transition elements may result in adamantine luster.\r\n</p>'),
(3, 'Hardness', 'images/Nz1Vlh3MmEoMimMmjAxKwhf6zdTJqwcPGmmhBISz.jpg', '<h3>Mohs Hardness</h3>\r\n<p>\r\nThe Mohs scale of mineral hardness characterizes the scratch resistance of various minerals through the ability of a harder material to scratch a softer material. It was created in 1812 by the German geologist and mineralogist Friedrich Mohs and is one of several definitions of hardness in materials science. The method of comparing hardness by seeing which minerals can scratch others, however, is of great antiquity, having been mentioned by Theophrastus in his treatise On Stones, c. 300 BC, followed by Pliny the Elder in his Naturalis Historia, c. 77 AD.\r\n</p>\r\n<p>\r\nThe Mohs scale of mineral hardness is based on the ability of one natural sample of matter to scratch another mineral. The samples of matter used by Mohs are all different minerals. Minerals are pure substances found in nature. Rocks are made up of one or more minerals.\r\n</p>\r\n<h3>\r\nMaking Hardness Comparisons\r\n</h3>\r\n<p>\r\n\"Hardness\" is the resistance of a material to being scratched. The test is conducted by placing a sharp point of one specimen on an unmarked surface of another specimen and attempting to produce a scratch. Here are the four situations that you might observe when comparing the hardness of two specimens\r\n</p>\r\n<p>\r\n1. If Specimen A can scratch Specimen B, then Specimen A is harder than Specimen B<br/>\r\n2. If Specimen A does not scratch Specimen B, then Specimen B is harder than Specimen A<br/>\r\n3. If the two specimens are equal in hardness then they will be relatively ineffective at scratching one another. Small scratches might be produced, or it might be difficult to determine if a scratch was produced<br/>\r\n4. If Specimen A can be scratched by Specimen B but it can not be scratched by Specimen C, then the hardness of Specimen A is between the hardness of Specimen B and Specimen C.\r\n</p>\r\n<h3>Hardness Testing Tips</h3>\r\n<p>\r\n+ A list of minerals in order of hardness can be a handy reference. If you determine that a specimen has a hardness of Mohs 4 you can quickly get a list of potential minerals.<br/>\r\n+ Practice and experience will improve your abilities when doing this test. You will become faster and more confident.<br/>\r\n+ If the hardness of the unknown specimen is about 5 or less, you should be able to produce a scratch without much exertion. However, if the unknown specimen has a hardness of about 6 or greater, then producing a scratch will require some force. For those specimens, hold the unknown firmly against the table, place the standard specimen against it, press firmly with determination, then holding pressure slowly drag the standard specimen across the surface of the unknown.<br/>\r\n+ Don\'t be fooled by a soft standard specimen producing a mark on a hard unknown. That mark is like what a piece of chalk produces on a blackboard. It will wipe off without leaving a scratch. Wipe your finger across the tested surface. If a scratch was produced there will be a visible groove. If marks wipe away then a scratch was not produced.<br/>\r\n+ Some hard materials are also very brittle. If one of your specimens is breaking or crumbling rather than scratching, you will have to be very careful while conducting the test. Testing tiny or granular specimens can be difficult.<br/>\r\n+ Some specimens contain impurities. If the results of your test are not visibly conclusive, or if the information from your test does not conform with other properties, do not hesitate to do the test again. It is possible that a small piece of quartz (or another impurity) was embedded in one of your specimens.<br/>\r\n+ Don\'t be wimpy! This is a very common problem. Some people casually rub one specimen back and forth against another and then look for a mark. That is not how the test is done. It is done with a single, determined motion with the goal of cutting a scratch.<br/>\r\n+ Be careful. When you hold the unknown specimen against the table, position it so that the known specimen will not be pulled across one of your fingers.<br/>\r\n+ This test should be done on a lab table or work bench with a durable surface or a protective covering. Don\'t do this type of testing on fine furniture.<br/>\r\n+ Test tiny particles or grains by placing them between two pieces of an index mineral and scraping them together. If the grains are harder than the index mineral scratches will be produced. If the grains are softer they will smear.\r\n</p>\r\n<h3>Hardness Variations in a Single Material</h3>\r\n<p>Most minerals have a fairly consistent hardness. For example, the hardness of calcite is always about 3. However, some minerals have a range of hardness.</p>\r\n<p>\r\nMinerals that are part of a solid solution series can change in hardness as the composition varies. Atomic bonds between some elements are stronger than others. An example is garnet which has a composition of X3Y2(SiO4)3 where X can be Ca, Mg or Fe and Y can be Al, Fe or Cr. Garnets with different compositions have different hardness. Garnets range in hardness from 6.5 to 8.\r\n</p>\r\n<p>\r\nMinerals such as kyanite have different hardness in different directions. Kyanite is a mineral that frequently occurs in blade-shaped crystals. These crystals have a hardness of about 5 if they are tested parallel to the long axis of the crystal and a hardness of about 7 if they are tested parallel to the short axis of a crystal.\r\n</p>\r\n<p>\r\nWeathering can also influence the hardness of a mineral. Weathering usually changes a mineral\'s composition with the weathering product usually softer than the original material. When testing the hardness or streak or other property of a mineral, the best way to test is on a freshly broken surface that has not been exposed to weathering.\r\n</p>'),
(4, 'Optical', 'images/OfWnfwWY5H4sjvOfldQgslR7WzHfh0ORjQCEfziZ.jpg', '<h3>Fluorescence</h3>\r\n<p>Fluorescence in minerals occurs when a specific wavelength of light such as ultraviolet (UV) light, electron beams or x-rays are directed at it. This light excites electrons in the mineral causing them to temporarily jump to a higher orbit in the atomic structure. Once the electron returns to its previous orbit, a small amount of energy is released in the form of a different wavelength of light than what\'s being shone onto it. This produces a visible colour change of the mineral that we see and is the phenomenon known as fluorescence.</p>\r\n<p>\r\nOnly about 10% of minerals have a fluorescence that is visible to humans, these minerals must contain \'activators\' (cations of metal) in specific concentrations. Different metal activators will produce different colours.\r\n</p>\r\n<h3>Phosphorescence</h3>\r\n<p>\r\nPhosphorescence is a phenomenon exhibited in several fluorescent minerals where the mineral continues to glow even after the UV light source has been removed. The glow slowly fades, and after several seconds (or minutes in a few cases) is no longer visible to the eye. Only few minerals phosphoresce; phosphorescence is only noted as interesting mineral property, rarely as a diagnostic identification property. Certain mineral specimens from specific localities all phosphoresce. Calcite specimens from Terlingua, Texas fluoresce bluish-white with a strong phosphorescence.\r\n</p>\r\n<h3>Calcite Optical Test</h3>\r\n<p>\r\nIf you take a calcite crystal, in particular the Island spar variety and place it over a dot on paper, it will split the dot in two if you look along one of its axis.\r\n</p>'),
(5, 'Specific Gravity', 'images/CkL1H5hOI2N9r5ApypbmrSUKqR6jDZ2vyQjmtPtT.jpg', '<p>\r\nThe Specific Gravity (SG) of a substance is a measure of its density. It is expressed as the ratio of the weight of a given volume of the substance compared to the weight of an equal volume of a reference substance – usually water [1] . An alternative term sometimes used is: WEIGHT PER UNIT VOLUME. The reference substance (water) is given an SG of 1. In the International System of units (SI)  the weight of water is defined in terms of its of volume: thus 1 litre of water weighs 1 kilogram and 1 cubic meter (1000 litres) of water weighs 1 tonne (1000 kg).  Thus the weight in tonnes of any substance whose volume is expressed in cubic meters can be simply calculated by multiplying that volume by its SG. For example: a cubic meter of a rock with an SG of 2.5 weighs 2.5 tonnes\r\n</p>\r\n<h3>How to measure SG</h3>\r\n<p>\r\nAs illustrated in the picture. you need two measurements, the first is the dry mass of the mineral and the second is the volume of the mineral. The volume can be measured by placing the mineral in a graduated container of water. The volume of water displaced is equal to the volume of the mineral. divide the mass by the volume to get SG. SG has no units because we use water as a standard because one cubic centimeter of water weighs one gram and you can essentially remove the units.\r\n</p>'),
(6, 'Transparency', 'images/fB9FLkWJK9IjrV19qZr0sCBvOBjZrr9KM3NiVNr5.jpg', '<h3>Transparent Minerals</h3>\r\n<p>\r\nAs shown in the image, transparency is a measure of how much light can pass through a mineral. A transparent mineral is one that lets all most all of the light through unhindered with minor alterations to its path. These are the minerals you can see through. \r\n</p>\r\n<h3>Translucent Minerals</h3>\r\n<p>\r\nTranslucent minerals let some light through but not all of it. You can not see through them but you can see the light behind the mineral.\r\n</p>\r\n<h3>Opaque Minerals</h3>\r\n<p>\r\nOpaque minerals let no light through. You cannot see through these minerals. you also cannot see light behind the mineral when you hold them up to a light source.\r\n</p>\r\n<h3>Variations in transparency in the same mineral</h3>\r\n<p>\r\nAn example of this is quartz. Quartz in its purest form in transparent and none colored. different impurities and inclusions in its crystal system causes different coloring and different degrees on transparency. This is not just applicable to quartz but to other transparent minerals such as calcite.\r\n</p>'),
(7, 'Habit', 'images/gGrAYYTqUlEqwWWaxPJ7IKu3d5gHwAQ4xHqmFfPb.jpg', '<p>\r\nThe term crystal habit describes the favored growth pattern of the crystals of a mineral species, whether individually or in aggregate. It may bear little relation to the form of a single, perfect crystal of the same mineral, which would be classified according to crystal system. \r\n</p>\r\n<p>\r\nThe terminology used to describe crystal habit is not intended to replace the precise nomenclature of crystallography. Instead, it is intended as a supplement to this system.\r\n</p>\r\n<p>\r\nDiscussions of crystal habit are more descriptive than precise; for this reason the terminology is suited to the discussion of mineral samples discovered in the field. Naturally formed specimens are rarely quantitatively perfect.\r\n</p>\r\n<p>\r\nAdjectives used to describe the habit of individual crystals are \'equant,\' \'prismatic,\' and \'tabular.\' Aggregates of crystals may also be termed equant or prismatic, while aggregates of thin, flat, tabular crystals may be \'bladed.\' Thin sheets, flakes or scales are termed \'foliated,\' \'micaceous,\' and, if feathery or delicate, \'lamellar\' or \'plumose.\'\r\n</p>\r\n<h3>Equant</h3>\r\n<p>A crystal which is equant or equidimensional possesses approximately the same side length in every direction. Crystals of garnet are often of equant habit.</p>\r\n<h3>Prismatic</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/Ns0NTZphHgwoBJV9PqMjrIxem2gTUZVDYKOeajuh.jpg\" alt=\"prismatic\"/>\r\n<p>\r\nA prismatic crystal is elongated in one direction like a prism. The mineral tourmaline often forms crystals of such habit.\r\n</p>\r\n<h3>Tabular</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/XwUeuprNlHxvZ6eIhKMbxZr4ENbxmuwFIRLehXq3.jpg\" alt=\"prismatic\"/>\r\n<p>\r\nTabular crystals appear tabular or platelike in shape.\r\n</p>\r\n<h3>Bladed</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/bIERxoC3KNnhCBWtExqmUkRm4LNYBcIL1ret1Lnm.jpg\" alt=\"prismatic\"/>\r\n<p>\r\nA specimen displaying bladed habit possesses a collection of elongated, flat crystals suggestive of knife blades. Gypsum often displays crystals of bladed habit.\r\n</p>\r\n<h3>Micaceous</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/Q6BRrL0ahcXW9AII2gNpBCzLMpOatLqgnLizaK2l.jpg\" alt=\"prismatic\"/>\r\n<p>\r\nMinerals of micaceous habit form as thin, flat sheets or flakes which are easily peeled or split off the larger mass. Muscovite provides an example of micaceous habit. Crystals of foliated habit are separable into leafy structures or display leaflike projections.\r\n</p>\r\n<h3>Hopper</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/JkuEkKykIZgOQYMnyprMWLT2Fiu5onGv5ARXXJ60.jpg\" alt=\"hopper\"/>\r\n<p>\r\nA hopper crystal is a form of crystal, defined by its \"hoppered\" shape. The edges of hoppered crystals are fully developed, but the interior spaces are not filled in. This results in what appears to be a hollowed out step lattice formation, as if someone had removed interior sections of the individual crystals. In fact, the \"removed\" sections never filled in, because the crystal was growing so rapidly that there was not enough time (or material) to fill in the gaps.\r\n</p>\r\n<h3>Plumose</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/jp6IWvD7z37oCXgXvFkNXpU1KLDpIp8t3M5O2bRm.jpg\" alt=\"Plumose\"/>\r\n<p>\r\nA mineral specimen of plumose habit displays fine, feathery scales resembling plumes. \'Plumose\' is derived from the Latin term pluma, or \'feather.\'\r\n</p>\r\n<h3>Acicular</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/rAwt6qeYmbGK2vuCPmIhzRpJZrwjeMBWvD3WDraZ.jpg\" alt=\"Acicular\"/>\r\n<p>\r\nThe adjective \'acicular\' means needlelike in shape. An acicular aggregate of crystals contains many long, slender crystals which may radiate out like needles or bristles from a common base. Acicular crystals are typically long and narrow like a pine leaf and seem to possess a sharp point. The mineral natrolite often exhibits acicular crystals.\r\n</p>\r\n<h3>Filiform</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/GdrN0j73ysEs9LEU3S2iwdf8MvpahwhSym00SjB0.jpg\" alt=\"Filiform\"/>\r\n<p>\r\nA mineral possessing crystals of filliform habit exhibits many hairlike or threadlike filaments. \"Filiform\' is derived from the Latin word filum, \'thread.\'\r\n</p>\r\n<h3>Fibrous</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/1GmcMfpk8D3TjV34pjuhxS41aVzxO5OD9XqaxErl.jpg\" alt=\"Fibrous\"/>\r\n<p>Specimens possessing fibrous habit exhibit clumps of sinewy, stringy, or hairlike fibers.</p>\r\n<h3>Reticulated</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/5GkVJJ4w2vtzAUF4FtKCzFLOAtOKS9YVkGtyasCX.jpg\" alt=\"Reticulated\"/>\r\n<p>A mineral specimen of reticulated habit seems to display a lattice, net, or network of small crystals. The word \'reticulated\' is derived from the Latin term rete, or \'net.\'</p>\r\n<h3>Stellated</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/ta2CG0Zdfm5mjozpBuaLQk16zVbSLumxFfr8fCuG.jpg\" alt=\"Stellated\"/>\r\n<p>\r\nA mineral of stellated habit possesses several branches which radiate outwards from the center in a pattern resembling a star. The word \'stellated\' stems from the Latin term stella, or \'star.\'\r\n</p>\r\n<h3>Dendritic</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/P3XPFSofAvAILPjvCOqPDfCDvbSPwIDOXVdHt3Ln.jpg\" alt=\"Dendritic\"/>\r\n<p>\r\nDendritic crystals form a divergent branching structure reminiscent of an arborescent, organic growth such as a tree or a dendrite. Native copper sometimes exhibits this habit.\r\n</p>\r\n<h3>Colloform</h3>\r\n<p>\r\nSpecimens of colloform habit exhibit spherical, rounded, or bulbous shapes. Botryoidal, reniform, and mammillary habits are subsets of this category.\r\n<h3>Botryoidal</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/HFR4YftzT8bOinsP1am66VuCH2Zv3Kbsqdgt6XLs.jpg\" alt=\"Botryoidal\"/>\r\n<p>The word \'botryoidal\' means \'resembling a bunch of grapes,\' or globular. Specimens of malachite frequently provide examples of botryoidal crystals. The Greek word botrus, \'bunch of grapes,\' provides the linguistic root of botryoidal.</p>\r\n<h3>Mammillary</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/XgmUEkldfLrhk1vQwdfKopuWnciYJTZ85MnRHKWY.jpg\" alt=\"Mammillary\"/>\r\n<p>Samples possessing mammillary crystal habit display soft, rounded curves</p>\r\n<h3>\r\nReniform</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/chAMOIZMEyluM3RNAng1DUolQb4gsNnWOaEtD1iY.jpg\" alt=\"Reniform\"/>\r\n<p>Reniform crystal habit displays the shape of a kidney. The mineral species hematite provides samples which exemplify both mammillary and reniform habit. \'Reniform\' is derived from the Latin renes, \'kidney.\'</p>\r\n<h3>Oolitic</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/NuUC6QweKpz9ZfYIDmC5iPTXCVkc5BeEyJSTGZUO.jpg\" alt=\"Oolitic\"/>\r\n<p>Crystals of oolitic habit form small spheres or grains which resemble fish roe. Oolites are often found in limestones.</p>\r\n<h3>Pisolitic</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/UEPmhojpbYJhiLWz4D1ksM4N49ZDHnaeUdqDmBNs.jpg\" alt=\"Pisolitic\"/>\r\n<p>A mineral of pisolitic habit develops round, pea-shaped forms. These are larger and slightly more uneven than an oolite and are usually composed of calcium carbonate. The word \'pisolitic\' is derived from the Greek term pisos, \'pea.\'</p>\r\n<h3>Stalactitic</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/hMbKylmwEQ3YxadPFMiq5GFnFfSDXP13bV3vB3ip.jpg\" alt=\"Stalactitic\"/>\r\n<p>Stalactitic or columnar crystal habit refers to the tall, tapered, columlike appearance of an icicle or a limestone stalactite. Such formations are built up by the dripping of mineral-laden solution. The minerals calcite and aragonite (CaCO3) typically form stalactites. The term is derived from the Greek word stalaktos, \'dripping.\'</p>\r\n<h3>Concretionary</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/3XB5gaPmyX5kTAGeVzcjNjdGgLPao1ITVJViOGOL.jpg\" alt=\"Concretionary\"/>\r\n<p>A concretion develops when mineral matter is concentrically deposited around a nucleus and colored and banded layers are build up. Malachite often exhibits such formations.</p>\r\n<h3>Striated</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/ocMvKVigIwoxgNqMbnl3HUI3wDpAfWMge7IYfBPD.jpg\" alt=\"Striated\"/>\r\n<p>Minerals whose crystals are of striated habit display shallow parallel grooves or lines along flat crystal faces. Pyrite often demonstrates square, striated crystals.</p>\r\n<h3>Massive</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/EWfzHKcekiL7A5nAjHlx6bgyEXCbkRS4En1cHHq5.jpg\" alt=\"Massive\"/>\r\n<p>Massive or earthy habit describes a large, lumpy mass which has no apparent crystal form. In such a sample the crystals are too tiny to be observable by the eye and are interlocked and mingled; the specimen lacks visible crystals.</p>\r\n<h3>Drusy</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/K2cDvpNoxQuqyyoJ3x6McQH2A8LmPn9TxfcIqTUO.jpg\" alt=\"Drusy\"/>\r\n<p>A sample exhibiting drusy habit displays a surface covered with a fine furry layer of tiny crystals.</p>\r\n'),
(8, 'Fracture', 'images/NpYemiU8Lyj8X1pkRahP1WRAxrqw0hTgudxOQceM.jpg', '<p>Fracture is the property of a mineral breaking in a more or less random pattern with no smooth planar surfaces. Since nearly all minerals have an orderly atomic structure, individual mineral grains have internal axes of length, width, and depth, related to the consistent arrangement of the atoms.</p>\r\n<h3>Conchoidal fracture</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/FOUdPE0zPATL0Ojh4Ut9agNYhBHkVJxEV41O5QYX.jpg\" alt=\"concoidal\"/>\r\n<p>\r\nConchoidal fracture breakage that resembles the concentric ripples of a mussel shell. It often occurs in amorphous or fine-grained minerals such as flint, opal or obsidian, but may also occur in crystalline minerals such as quartz. Subconchoidal fracture is similar to conchoidal fracture, but with less significant curvature. Note that obsidian is an igneous rock, not a mineral, but it does illustrate conchoidal fracture well.\r\n</p>\r\n<h3>Earthy fracture</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/uEtqNBp1ochYr8djAPJy8OtFXWmaQ8UegFdOJYLi.jpg\" alt=\"Earth fracture\"/>\r\n<p>\r\nEarthy fracture is reminiscent of freshly broken soil. It is frequently seen in relatively soft, loosely bound minerals, such as limonite, kaolinite and aluminite.\r\n</p>\r\n<h3>Hackly fracture</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/kQvYNlxrYf9duJ861Y6IAazmS8IIRa0eWEDeA63J.jpg\" alt=\"Hackly fracture\"/>\r\n<p>\r\nHackly fracture (also known as jagged fracture) is jagged, sharp and not even. It occurs when metals are torn, and so is often encountered in native metals such as copper and silver.\r\n</p>\r\n<h3>Splintery fracture</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/xhV1M6DJQLEzuxAWV58CiwaYMinpMO9fz7n4NaG3.jpg\" alt=\"splintery fracture\"/>\r\n<p>\r\nSplintery fracture comprises sharp elongated points. It is particularly seen in fibrous minerals such as chrysotile, but may also occur in non-fibrous minerals such as kyanite.\r\n</p>\r\n<h3>Uneven fracture</h3>\r\n<img class=\"test-img mb\" loading=\"lazy\" src=\"http://localhost:8000/images/XlpLvbIYxwDC84rBzZ2WywvEF9pJIVaY3KIGVlll.jpg\" alt=\"Uneven fracture\"/>\r\n<p>\r\nUneven fracture is a rough surface or one with random irregularities. It occurs in a wide range of minerals including arsenopyrite, pyrite and magnetite.\r\n</p>');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(20) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `type` varchar(60) NOT NULL DEFAULT 'general'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `type`) VALUES
(1, 'ngoni', 'ngoni@test.com', '$2y$10$QzK06MIU1u9wHK65rCtbOulPMYZswGtE4.dG.Lzy7C1Q657oPZx..', 'admin'),
(2, 'mike', 'mike@test.com', '$2y$10$2949L9tqX44FdHzlOA4kMuV.Kpa/rgIh8q9kqfwqgT7BuvB./QqVy', 'admin'),
(3, 'peter', 'peter@test.com', '$2y$10$uJTIAQI37WyEE2flubXR4.VgKlcvopSjlanzihuWy5gpLmvZ5hFRC', 'general'),
(4, 'james', 'james@test.com', '$2y$10$gLRo0iCyST0OcnpDUDelOOxoZLOXThpEMwYVfqKFjd3p8j1avoBJC', 'general'),
(5, 'jill', 'jill@test.com', '$2y$10$JOGm5AxEyC8rqGfS9JGY7ukLORAHOueo/RmKrieFGCslkdiILCwmq', 'general'),
(7, 'tats', 'tats@test.com', '$2y$10$m2wW1uDszEWiafaSyvv.ZuJ9YB6HWd4jRHKA2oQCv/.FNGhkwAGG2', 'general'),
(8, 'Langton', 'langton@test.com', '$2y$10$kDCywcrNXWKLem.bJNHUoOV3YVA5EIz3n30JLfDYoght4KRnV74cy', 'general'),
(9, 'Chipo', 'Chipo@test.com', '$2y$10$ZSnzMMNiSAVagah.H756W.df/y5ThYKWP.91SwKMcPhuOlMICX.C6', 'general'),
(10, 'Kerry', 'Kerry@test.com', '$2y$10$Dp21v92qbxhwyrNmTpuqV.nMQclRy.81JNl29nouwex5sFVDS103e', 'general'),
(11, 'Michelle', 'michelle@test.com', '$2y$10$tFMmILWU.vnT7MGbGwdOtuiAc8BdDMo6KbYgxbaJs0eeuq0KQugLe', 'general'),
(12, 'Chopper', 'chopper@test.com', '$2y$10$PXRp9YzdSkoEGjDlWdC02O94PGspYiEZi7xY0dSbODZzXLZ6cTWRS', 'general'),
(13, 'Ralp', 'ralp@test.com', '$2y$10$9WBOrQiDudupZkdY9Oax3uRQ.eKRex2LfBcRYyqy54Cnvt0Rpn6ZK', 'general'),
(15, 'alx', 'alx@test.com', '$2y$10$XxDndgZgEoe/DRSzvhSzweIAL9SH0jGxSCcZNsCZ0Oi8BOEdaecce', 'admin');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `hand_samples`
--
ALTER TABLE `hand_samples`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tests`
--
ALTER TABLE `tests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `hand_samples`
--
ALTER TABLE `hand_samples`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `tests`
--
ALTER TABLE `tests`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
